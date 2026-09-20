import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gfrtzw2sv.css';
import '../../css/p/pvr2ugb9h.css';
import '../../css/t/t_tn2nbpg.css';
import '../../css/e/endzr7_ol.css';
import '../../css/x/xifm14bsd.css';
import '../../css/x/xks2kxbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gfrtzw2sv"/><path class="pvr2ugb9h"/><path class="t_tn2nbpg"/><path class="endzr7_ol"/><path class="xifm14bsd"/><path class="xks2kxbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:synchronize-arrows-lock"} {...others} />);
}

export default Component;
