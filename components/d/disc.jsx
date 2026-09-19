import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc0gd3b0i.css';
import '../../css/d/d3_4f-5he.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pc0gd3b0i"/><path class="d3_4f-5he"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:disc"} {...others} />);
}

export default Component;
