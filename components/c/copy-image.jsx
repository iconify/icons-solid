import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8jmoacni.css';
import '../../css/t/tm0ea5ulw.css';
import '../../css/s/skbjqubnk.css';
import '../../css/o/ob_eeh05x.css';
import '../../css/q/qn-4ppbxb.css';
import '../../css/n/nqsobsbck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u8jmoacni"/><path class="tm0ea5ulw"/><path class="skbjqubnk"/><path class="ob_eeh05x"/><path class="qn-4ppbxb"/><path class="nqsobsbck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:copy-image"} {...others} />);
}

export default Component;
