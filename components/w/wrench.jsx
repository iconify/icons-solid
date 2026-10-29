import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzyrzqb_e.css';
import '../../css/h/h1553sbia.css';
import '../../css/d/d70kqgb7c.css';
import '../../css/j/jt_cb57-a.css';
import '../../css/x/xr0zhwr-x.css';
import '../../css/h/h_8mjfohi.css';
import '../../css/k/k_y9zcb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nzyrzqb_e wm-shadow"/><path class="h1553sbia wm-k"/><path class="d70kqgb7c wm-k"/><path class="jt_cb57-a wm-k"/><path class="wm-k xr0zhwr-x"/><path class="h_8mjfohi wm-k"/><path class="k_y9zcb5r wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:wrench"} {...others} />);
}

export default Component;
