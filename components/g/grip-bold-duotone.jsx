import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ale4fugec.css';
import '../../css/k/k68tr-jhs.css';
import '../../css/l/lvhjo056y.css';
import '../../css/p/proyio1fx.css';
import '../../css/n/nse174buu.css';
import '../../css/z/zc2e18bve.css';
import '../../css/u/ujoiq9b0x.css';
import '../../css/h/h29afcbji.css';
import '../../css/j/j1gbk4czf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ale4fugec"/><path class="k68tr-jhs"/><path class="lvhjo056y"/><path class="proyio1fx"/><path class="nse174buu"/><path class="zc2e18bve"/><path class="ujoiq9b0x"/><path class="h29afcbji"/><path class="j1gbk4czf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grip-bold-duotone"} {...others} />);
}

export default Component;
