import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/liypecb8n.css';
import '../../css/i/inawvkb3j.css';
import '../../css/p/pmgxj2bto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="liypecb8n"/><path class="inawvkb3j"/><path class="pmgxj2bto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:engine-slash"} {...others} />);
}

export default Component;
