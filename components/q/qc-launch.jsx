import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r482a7max.css';
import '../../css/k/kr-9jkbii.css';
import '../../css/i/iyzleyb_j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r482a7max"/><path class="kr-9jkbii"/><path class="iyzleyb_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:qc-launch"} {...others} />);
}

export default Component;
