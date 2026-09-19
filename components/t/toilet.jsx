import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/f/fl-wx5upf.css';
import '../../css/j/jpgeqgbbo.css';
import '../../css/z/zp5_yccnt.css';
import '../../css/c/c1fwufksq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="fl-wx5upf"/><path class="jpgeqgbbo"/><path class="zp5_yccnt"/><path class="c1fwufksq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:toilet"} {...others} />);
}

export default Component;
