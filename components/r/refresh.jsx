import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnan30bdo.css';
import '../../css/o/oedfxmb8h.css';
import '../../css/o/oyjsdr-gf.css';
import '../../css/y/yi3r6bc3w.css';
import '../../css/w/wwp12tb0s.css';
import '../../css/l/lcli7812g.css';
import '../../css/c/c8sfukbon.css';
import '../../css/s/sufmazbio.css';
import '../../css/u/u4tg9q1zi.css';
import '../../css/j/j879schvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hnan30bdo wm-shadow"/><path class="oedfxmb8h wm-shadow"/><path class="oyjsdr-gf wm-k"/><path class="wm-k yi3r6bc3w"/><path class="wm-k wwp12tb0s"/><path class="lcli7812g wm-k"/><path class="c8sfukbon wm-shine"/><path class="sufmazbio wm-deco"/><path class="u4tg9q1zi wm-deco"/><path class="j879schvi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:refresh"} {...others} />);
}

export default Component;
