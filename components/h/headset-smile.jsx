import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptow3-bsv.css';
import '../../css/n/nvdz86b7e.css';
import '../../css/q/qe23atkmh.css';
import '../../css/l/l4hx09bed.css';
import '../../css/x/x5903ibse.css';
import '../../css/h/hq8616irj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ptow3-bsv"/><path class="nvdz86b7e"/><path class="qe23atkmh"/><path class="l4hx09bed"/><path class="x5903ibse"/><path class="hq8616irj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:headset-smile"} {...others} />);
}

export default Component;
