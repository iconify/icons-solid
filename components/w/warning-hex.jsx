import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3wp3gbjk.css';
import '../../css/o/opai67bub.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t3wp3gbjk"/><path class="opai67bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:warning-hex"} {...others} />);
}

export default Component;
