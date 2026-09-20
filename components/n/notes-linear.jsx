import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w86377v7g.css';
import '../../css/s/s9vk5acvx.css';
import '../../css/d/da3rcub4c.css';
import '../../css/c/coyhggb-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w86377v7g"/><path class="s9vk5acvx"/><path class="da3rcub4c"/><path class="coyhggb-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notes-linear"} {...others} />);
}

export default Component;
