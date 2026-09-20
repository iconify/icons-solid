import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztg319kwr.css';
import '../../css/w/wmsczlcro.css';
import '../../css/v/v-wfa-bny.css';
import '../../css/j/jxv6qwben.css';
import '../../css/l/ldl3u4bno.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ztg319kwr"/><path class="wmsczlcro"/><path class="v-wfa-bny"/><path class="jxv6qwben"/><path class="ldl3u4bno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:download-computer"} {...others} />);
}

export default Component;
