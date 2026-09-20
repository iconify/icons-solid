import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mc6hyed-e.css';
import '../../css/d/ds-p6pbte.css';
import '../../css/e/er0ieivbw.css';
import '../../css/p/p7m_dg3sh.css';
import '../../css/q/q_1wroxko.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mc6hyed-e"/><path class="ds-p6pbte"/><path class="er0ieivbw"/><path class="p7m_dg3sh"/><path class="q_1wroxko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:webcam"} {...others} />);
}

export default Component;
