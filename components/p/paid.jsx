import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvh0ujbjp.css';
import '../../css/x/xrpxglbsc.css';
import '../../css/o/oszteyb4a.css';
import '../../css/l/l2onbcc8q.css';
import '../../css/p/prj7bfb_i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vvh0ujbjp"/><path class="xrpxglbsc"/><path class="oszteyb4a"/><path class="l2onbcc8q"/><path class="prj7bfb_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:paid"} {...others} />);
}

export default Component;
