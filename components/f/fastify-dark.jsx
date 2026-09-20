import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h623n7bhi.css';

const viewBox = {"width":256,"height":167.509};
const content = `<path class="h623n7bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fastify-dark"} {...others} />);
}

export default Component;
