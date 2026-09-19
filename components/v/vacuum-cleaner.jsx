import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qt79kinow.css';
import '../../css/a/ar8lw3b0m.css';
import '../../css/l/lf08_gphq.css';
import '../../css/h/hb_vus13x.css';
import '../../css/a/a9i3e_buh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="qt79kinow"/><path class="ar8lw3b0m"/><path class="lf08_gphq"/><circle class="hb_vus13x"/><path class="a9i3e_buh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:vacuum-cleaner"} {...others} />);
}

export default Component;
