import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fq86o7b2w.css';
import '../../css/j/jmuo_s_vz.css';
import '../../css/g/g-umi1ukx.css';
import '../../css/o/oo-rikb_c.css';
import '../../css/f/f4hkvbbqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fq86o7b2w"/><path class="jmuo_s_vz wm-k"/><path class="g-umi1ukx wm-a"/><path class="oo-rikb_c wm-k"/><path class="f4hkvbbqi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stroller-sketch"} {...others} />);
}

export default Component;
