import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpsxk_bqh.css';

const viewBox = {"width":256,"height":167.509};
const content = `<path class="wpsxk_bqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fastify-light"} {...others} />);
}

export default Component;
