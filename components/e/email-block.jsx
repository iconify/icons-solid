import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vae5tl_vn.css';
import '../../css/t/tgxo-cukz.css';
import '../../css/c/cdf4k698y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="vae5tl_vn"/><circle class="tgxo-cukz"/><path class="cdf4k698y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:email-block"} {...others} />);
}

export default Component;
