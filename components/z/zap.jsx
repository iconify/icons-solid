import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gjcrqdj1g.css';
import '../../css/c/cfsbt4b-e.css';
import '../../css/d/d72lwqfrv.css';
import '../../css/u/ui_w9k4nc.css';
import '../../css/u/u0239194d.css';
import '../../css/o/o7de53b1f.css';
import '../../css/m/m2rn6xb0b.css';
import '../../css/t/ttty-goik.css';
import '../../css/r/rqd4ozbie.css';
import '../../css/n/nc596g77f.css';
import '../../css/i/ief6a8-av.css';
import '../../css/p/pcovv8bav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gjcrqdj1g wm-shadow"/><path class="cfsbt4b-e wm-k"/><path class="d72lwqfrv wm-k"/><path class="ui_w9k4nc wm-k"/><path class="u0239194d wm-k"/><path class="o7de53b1f wm-k"/><path class="m2rn6xb0b wm-k"/><path class="ttty-goik wm-k"/><path class="rqd4ozbie wm-k"/><path class="nc596g77f wm-k"/><path class="ief6a8-av wm-k"/><path class="pcovv8bav wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-gothic:zap"} {...others} />);
}

export default Component;
