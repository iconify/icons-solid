import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yd1gg7_mz.css';
import '../../css/f/fvy99utst.css';
import '../../css/j/jdogqw48n.css';
import '../../css/e/ea96_synm.css';
import '../../css/l/l0xgqsb2h.css';
import '../../css/v/vbgm2-j8a.css';
import '../../css/b/b8enn0b1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yd1gg7_mz"/><path class="fvy99utst wm-k"/><path class="jdogqw48n wm-k"/><path class="ea96_synm wm-k"/><path class="l0xgqsb2h wm-k"/><path class="vbgm2-j8a wm-k"/><path class="b8enn0b1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:barcode-sketch"} {...others} />);
}

export default Component;
