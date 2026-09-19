import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6aiztlet.css';

const viewBox = {"width":456,"height":464};
const content = `<path class="y6aiztlet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:rotate-ccw"} {...others} />);
}

export default Component;
