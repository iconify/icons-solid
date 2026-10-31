import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a8xf35bcr.css';
import '../../css/p/p5nhxjbbc.css';
import '../../css/l/lweanib0y.css';
import '../../css/g/grlc_zkln.css';
import '../../css/j/j5t__gbpc.css';
import '../../css/a/aqiletbzc.css';
import '../../css/s/suxgtabpw.css';
import '../../css/j/jrepcz-3l.css';
import '../../css/i/i9-imbdrv.css';
import '../../css/r/re9fd6ytn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a8xf35bcr wm-shadow"/><path class="p5nhxjbbc"/><path class="lweanib0y"/><path class="grlc_zkln"/><path class="j5t__gbpc"/><path class="aqiletbzc"/><path class="suxgtabpw"/><path class="jrepcz-3l"/><path class="i9-imbdrv wm-shine"/><path class="re9fd6ytn wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:grip-horizontal"} {...others} />);
}

export default Component;
