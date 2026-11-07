import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ale4fugec.css';
import '../../css/s/shcpvcbfu.css';
import '../../css/l/lvhjo056y.css';
import '../../css/p/proyio1fx.css';
import '../../css/u/ucynakz8a.css';
import '../../css/n/nse174buu.css';
import '../../css/z/zc2e18bve.css';
import '../../css/u/ujoiq9b0x.css';
import '../../css/h/h29afcbji.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ale4fugec"/><path class="shcpvcbfu"/><path class="lvhjo056y"/><path class="proyio1fx"/><path class="ucynakz8a"/><path class="nse174buu"/><path class="zc2e18bve"/><path class="ujoiq9b0x"/><path class="h29afcbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grip-bold"} {...others} />);
}

export default Component;
