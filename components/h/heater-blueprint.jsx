import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y6nqp3bkj.css';
import '../../css/z/zwo-_gtqp.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/l/lcikzxw6e.css';
import '../../css/r/r6lbemnug.css';
import '../../css/c/c0bk-4brx.css';
import '../../css/g/gshlaibwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco y6nqp3bkj"/><path class="wm-deco zwo-_gtqp"/><path class="cf3uzcrzx wm-deco"/><path class="lcikzxw6e wm-k"/><path class="r6lbemnug wm-a"/><path class="c0bk-4brx wm-s"/><path class="gshlaibwf wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heater-blueprint"} {...others} />);
}

export default Component;
