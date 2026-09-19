import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnut4_biv.css';
import '../../css/s/s-k1_mf2k.css';
import '../../css/a/axni4fzcl.css';
import '../../css/i/isx3pjbzb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="hnut4_biv"/><path class="s-k1_mf2k"/><rect class="axni4fzcl"/><rect class="isx3pjbzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:game-console-one"} {...others} />);
}

export default Component;
