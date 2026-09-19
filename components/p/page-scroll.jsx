import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp_ojgx_e.css';
import '../../css/q/q-roxqdob.css';
import '../../css/o/oc7q7_bck.css';
import '../../css/k/kgeui_bzu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rp_ojgx_e"/><path class="q-roxqdob"/><path class="oc7q7_bck"/><path class="kgeui_bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:page-scroll"} {...others} />);
}

export default Component;
