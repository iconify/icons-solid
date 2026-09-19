import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgrjy_bia.css';
import '../../css/u/uywjejccq.css';
import '../../css/s/sabg2bw7v.css';
import '../../css/x/xojt4-jyo.css';
import '../../css/r/rarptgbir.css';
import '../../css/f/fw4o7_bku.css';
import '../../css/h/hm7w265uk.css';
import '../../css/k/kq-x2hb4y.css';
import '../../css/y/yzo5plbsh.css';
import '../../css/s/s7pz6-j5k.css';
import '../../css/t/tkdwmveuo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zgrjy_bia"/><path class="uywjejccq"/><circle class="sabg2bw7v"/><circle class="xojt4-jyo"/><circle class="rarptgbir"/><circle class="fw4o7_bku"/><circle class="hm7w265uk"/><circle class="kq-x2hb4y"/><circle class="yzo5plbsh"/><circle class="s7pz6-j5k"/><path class="tkdwmveuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:universal"} {...others} />);
}

export default Component;
