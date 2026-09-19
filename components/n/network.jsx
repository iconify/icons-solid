import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/u/ugw1omula.css';
import '../../css/x/xjh3njbok.css';
import '../../css/m/m5wsf8blc.css';
import '../../css/k/kzo_q-bzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="ugw1omula"/><circle class="xjh3njbok"/><circle class="m5wsf8blc"/><path class="kzo_q-bzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:network"} {...others} />);
}

export default Component;
