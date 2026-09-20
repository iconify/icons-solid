import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zj-kr1y6y.css';
import '../../css/b/bd42t7_nc.css';
import '../../css/x/x4mk1_boj.css';
import '../../css/v/v3i7yu8ev.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zj-kr1y6y"/><path class="bd42t7_nc"/><path class="x4mk1_boj"/><path class="v3i7yu8ev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:wireless-wifi-signal-antenna"} {...others} />);
}

export default Component;
