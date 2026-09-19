import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/t/tayw9ow_b.css';
import '../../css/e/e3cs6jpyd.css';
import '../../css/v/vp_gxl_wh.css';
import '../../css/a/a3cpzu3hu.css';
import '../../css/k/k8yf_nbqd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="tayw9ow_b"/><path class="e3cs6jpyd"/><path class="vp_gxl_wh"/><path class="a3cpzu3hu"/><path class="k8yf_nbqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:level-eight-title"} {...others} />);
}

export default Component;
