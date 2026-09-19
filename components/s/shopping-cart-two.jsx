import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/caaopxbqh.css';
import '../../css/y/y0rijtbja.css';
import '../../css/k/kqva0-m9f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="caaopxbqh"/><circle class="y0rijtbja"/><circle class="kqva0-m9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:shopping-cart-two"} {...others} />);
}

export default Component;
