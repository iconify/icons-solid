import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu341abxr.css';
import '../../css/k/khza6gz6n.css';
import '../../css/r/rkyevfkwh.css';

const viewBox = {"width":1000,"height":1000};
const content = `<rect class="pu341abxr"/><path class="khza6gz6n"/><path class="rkyevfkwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:godonateme-light"} {...others} />);
}

export default Component;
