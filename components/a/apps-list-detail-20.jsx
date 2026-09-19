import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibxw97a7i.css';
import '../../css/n/nccfcsxui.css';
import '../../css/n/nkchmbc-t.css';
import '../../css/f/fr236kbdl.css';
import '../../css/b/bxegrmbjp.css';
import '../../css/s/se36adcuq.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVG1UsBqcNm)" clip-rule="evenodd" class="ibxw97a7i"/><path fill="url(#SVGKboikK4R)" class="nccfcsxui"/><defs><linearGradient id="SVG1UsBqcNm" x1="7.65" x2="17.1" y1="2.286" y2="16" gradientUnits="userSpaceOnUse"><stop class="nkchmbc-t"/><stop offset="1" class="fr236kbdl"/></linearGradient><linearGradient id="SVGKboikK4R" x1="3.189" x2="5.737" y1="5.595" y2="15.361" gradientUnits="userSpaceOnUse"><stop offset=".125" class="bxegrmbjp"/><stop offset="1" class="se36adcuq"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:apps-list-detail-20"} {...others} />);
}

export default Component;
