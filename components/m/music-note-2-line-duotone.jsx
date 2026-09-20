import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gtb7pwkil.css';
import '../../css/c/c55ag9btm.css';
import '../../css/r/roh-o2f0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gtb7pwkil"/><circle class="c55ag9btm"/><path class="roh-o2f0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-2-line-duotone"} {...others} />);
}

export default Component;
