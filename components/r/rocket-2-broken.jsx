import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q31ynxbic.css';
import '../../css/k/kjoweacae.css';
import '../../css/u/uzaasqbnx.css';
import '../../css/s/s6txghz2w.css';
import '../../css/t/tszisubeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="q31ynxbic"/><path class="kjoweacae"/><path class="uzaasqbnx"/><path class="s6txghz2w"/><path class="tszisubeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-2-broken"} {...others} />);
}

export default Component;
