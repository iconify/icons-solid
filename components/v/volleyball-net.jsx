import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkx_7x8pw.css';
import '../../css/t/tny2hsf4f.css';
import '../../css/y/yof_0dwwo.css';
import '../../css/z/zxcukyb-y.css';
import '../../css/h/hq64wnb-q.css';
import '../../css/z/z3xsrvbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vkx_7x8pw"/><path class="tny2hsf4f"/><path class="yof_0dwwo"/><path class="zxcukyb-y"/><path class="hq64wnb-q"/><path class="z3xsrvbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:volleyball-net"} {...others} />);
}

export default Component;
