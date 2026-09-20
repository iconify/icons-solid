import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/w/wgngop0ao.css';
import '../../css/k/kmr3f9lbv.css';
import '../../css/f/fyihn7b4x.css';
import '../../css/a/ajn4wobfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="wgngop0ao"/><rect class="kmr3f9lbv"/><path class="fyihn7b4x"/><rect class="ajn4wobfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:candlestick"} {...others} />);
}

export default Component;
