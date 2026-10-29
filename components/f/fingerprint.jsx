import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6jafmbin.css';
import '../../css/r/rce3nx_nl.css';
import '../../css/z/z-vkltbqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m6jafmbin wm-k"/><path class="rce3nx_nl wm-k"/><path class="wm-k z-vkltbqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:fingerprint"} {...others} />);
}

export default Component;
