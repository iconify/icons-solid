import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9vtb7iap.css';
import '../../css/s/sus7-obso.css';
import '../../css/x/xknwsob6t.css';
import '../../css/c/c3z22wbly.css';
import '../../css/d/d3f9kcbse.css';
import '../../css/j/jl8mr7bbd.css';
import '../../css/m/m7f1jkijc.css';
import '../../css/f/fmygxtk6o.css';
import '../../css/b/bej4oylzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9vtb7iap wm-shadow"/><path class="sus7-obso wm-k"/><path class="wm-k xknwsob6t"/><path class="c3z22wbly wm-k"/><path class="d3f9kcbse wm-k"/><path class="jl8mr7bbd wm-k"/><path class="m7f1jkijc wm-shine"/><path class="fmygxtk6o wm-k"/><path class="bej4oylzu wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:avatar-tiger"} {...others} />);
}

export default Component;
