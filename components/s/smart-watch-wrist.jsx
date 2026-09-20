import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmg--yr-c.css';
import '../../css/m/mryw9ohrk.css';
import '../../css/g/g-2fpdbmg.css';
import '../../css/i/ie7o2f3ak.css';
import '../../css/o/o1glfdcra.css';
import '../../css/g/gevz1nb0c.css';
import '../../css/s/sgcmx64gc.css';
import '../../css/q/q91itp8ue.css';
import '../../css/g/gq4czibww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qmg--yr-c"/><path class="mryw9ohrk"/><path class="g-2fpdbmg"/><path class="ie7o2f3ak"/><path class="o1glfdcra"/><path class="gevz1nb0c"/><path class="sgcmx64gc"/><path class="q91itp8ue"/><path class="gq4czibww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smart-watch-wrist"} {...others} />);
}

export default Component;
