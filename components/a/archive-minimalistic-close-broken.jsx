import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jgnu0ac5k.css';
import '../../css/p/p5qbbdc2d.css';
import '../../css/a/azjlppy5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jgnu0ac5k"/><path class="p5qbbdc2d"/><path class="azjlppy5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-minimalistic-close-broken"} {...others} />);
}

export default Component;
