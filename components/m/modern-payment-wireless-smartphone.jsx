import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tkr10zdrd.css';
import '../../css/g/gt_8fgbpa.css';
import '../../css/z/zyf0_gbnw.css';
import '../../css/v/vh4a3ccch.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tkr10zdrd"/><path class="gt_8fgbpa"/><path class="zyf0_gbnw"/><path class="vh4a3ccch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:modern-payment-wireless-smartphone"} {...others} />);
}

export default Component;
