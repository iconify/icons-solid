import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3wwhbp_h.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="d3wwhbp_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:instagram-square"} {...others} />);
}

export default Component;
