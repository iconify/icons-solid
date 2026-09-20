import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gmuzbbbpn.css';
import '../../css/g/ghg17sbpc.css';
import '../../css/r/rrcnd9b2h.css';
import '../../css/h/h7pr41bdg.css';
import '../../css/j/jg6iw-brl.css';
import '../../css/r/rm26opbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gmuzbbbpn"/><path class="ghg17sbpc"/><path class="rrcnd9b2h"/><path class="h7pr41bdg"/><path class="jg6iw-brl"/><path class="rm26opbzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:router-signal"} {...others} />);
}

export default Component;
