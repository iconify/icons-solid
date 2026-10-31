import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sm5nypbmy.css';
import '../../css/y/y-c7-eb9l.css';
import '../../css/p/psagcrfeb.css';
import '../../css/y/y-sdhv16c.css';
import '../../css/w/wdaapab_z.css';
import '../../css/m/mccrnwbie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sm5nypbmy wm-shadow"/><path class="wm-k y-c7-eb9l"/><path class="psagcrfeb wm-k"/><path class="wm-k y-sdhv16c"/><path class="wdaapab_z wm-k"/><path class="mccrnwbie wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:audio-waveform"} {...others} />);
}

export default Component;
