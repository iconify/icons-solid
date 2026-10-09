import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4f6_pbnc.css';
import '../../css/t/tolo0jbro.css';
import '../../css/z/zh_bxpbcd.css';
import '../../css/n/nyl_ck5xx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h4f6_pbnc"/><path class="tolo0jbro"/><path class="zh_bxpbcd"/><path class="nyl_ck5xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:data-centre-48"} {...others} />);
}

export default Component;
