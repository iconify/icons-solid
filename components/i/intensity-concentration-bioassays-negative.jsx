import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyjglo_4p.css';
import '../../css/k/krw96pejy.css';
import '../../css/a/afi37acqq.css';
import '../../css/y/y6eeyw1el.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsIntensityConcentrationBioassaysNegative0)" class="cuyn6tgcc"><path class="cyjglo_4p"/><path clip-rule="evenodd" class="krw96pejy"/><path class="afi37acqq"/><path clip-rule="evenodd" class="y6eeyw1el"/></g><defs><clipPath id="healthiconsIntensityConcentrationBioassaysNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:intensity-concentration-bioassays-negative"} {...others} />);
}

export default Component;
