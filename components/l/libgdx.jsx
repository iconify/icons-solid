import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc9zr_r5s.css';
import '../../css/d/d3xjujk0y.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="nc9zr_r5s"/><path class="d3xjujk0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:libgdx"} {...others} />);
}

export default Component;
