import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/t/t3x8jbbbh.css';
import '../../css/r/r0f02wbfa.css';
import '../../css/z/zh-912-xu.css';
import '../../css/d/dce-ubppx.css';
import '../../css/x/xy_uutb8n.css';
import '../../css/i/it6yfacxp.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="o93lq-byo"><path class="t3x8jbbbh"/><rect class="r0f02wbfa"/><path class="zh-912-xu"/><path class="dce-ubppx"/><path class="xy_uutb8n"/><path class="it6yfacxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cup"} {...others} />);
}

export default Component;
