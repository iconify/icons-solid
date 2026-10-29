import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k1s83clyc.css';
import '../../css/f/f22o3bcfn.css';
import '../../css/k/kwzn7wddv.css';
import '../../css/n/ntyogpbev.css';
import '../../css/i/ij86f9bpa.css';
import '../../css/d/dj3mcdcbo.css';
import '../../css/s/s7tzhjbje.css';
import '../../css/i/izp46w3gg.css';
import '../../css/k/k_9x3oyne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="k1s83clyc wm-deco"/><path class="f22o3bcfn wm-deco"/><path class="kwzn7wddv wm-k"/><path class="ntyogpbev wm-a"/><path class="ij86f9bpa wm-k"/><circle class="dj3mcdcbo wm-k"/><circle class="s7tzhjbje wm-s"/><circle class="izp46w3gg wm-k"/><circle class="k_9x3oyne wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rakhi-blueprint"} {...others} />);
}

export default Component;
