import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/havf_gbwh.css';
import '../../css/m/m0_mgcrix.css';
import '../../css/e/e_b_kv_oe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="havf_gbwh"/><path class="m0_mgcrix"/><path class="e_b_kv_oe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:send-to-back"} {...others} />);
}

export default Component;
