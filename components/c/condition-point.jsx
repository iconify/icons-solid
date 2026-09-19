import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfiw6xiub.css';
import '../../css/m/mfnnmcbqi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zfiw6xiub"/><path class="mfnnmcbqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:condition-point"} {...others} />);
}

export default Component;
