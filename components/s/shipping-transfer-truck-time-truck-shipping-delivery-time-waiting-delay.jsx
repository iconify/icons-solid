import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jbnmsfymx.css';
import '../../css/b/bqylap52x.css';
import '../../css/x/xamz-ubxf.css';
import '../../css/u/uon_ffenw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="jbnmsfymx"/><circle class="bqylap52x"/><path class="xamz-ubxf"/><path class="uon_ffenw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shipping-transfer-truck-time-truck-shipping-delivery-time-waiting-delay"} {...others} />);
}

export default Component;
