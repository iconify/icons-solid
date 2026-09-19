import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/koqcrnrzm.css';
import '../../css/r/r0t_e0upp.css';
import '../../css/h/hyw65wb2i.css';
import '../../css/m/mx9ayjb_q.css';
import '../../css/r/rr0_8uo4p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="koqcrnrzm"/><path class="r0t_e0upp"/><path class="hyw65wb2i"/><path class="mx9ayjb_q"/><path class="rr0_8uo4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:desktop-computer"} {...others} />);
}

export default Component;
