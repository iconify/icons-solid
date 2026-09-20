import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qpgyrzr1h.css';
import '../../css/f/f__nic5ty.css';
import '../../css/i/i1v0xqbor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qpgyrzr1h"/><path class="f__nic5ty"/><path class="i1v0xqbor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-3-linear"} {...others} />);
}

export default Component;
