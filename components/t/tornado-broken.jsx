import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cpba0cc3x.css';
import '../../css/e/erq4sqghc.css';
import '../../css/o/onn90jb9j.css';
import '../../css/l/ldoyc8baz.css';
import '../../css/s/s_gtqnwjr.css';
import '../../css/q/qbx_x9bdk.css';
import '../../css/p/pamt8wm4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cpba0cc3x"/><path class="erq4sqghc"/><path class="onn90jb9j"/><path class="ldoyc8baz"/><path class="s_gtqnwjr"/><path class="qbx_x9bdk"/><path class="pamt8wm4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-broken"} {...others} />);
}

export default Component;
