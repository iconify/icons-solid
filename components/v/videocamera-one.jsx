import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/eldoky0en.css';
import '../../css/a/ajxep-bpy.css';
import '../../css/q/qs645lbfc.css';
import '../../css/o/ohwln3bng.css';
import '../../css/j/jyjk2cs2r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="eldoky0en"/><path class="ajxep-bpy"/><circle class="qs645lbfc"/><circle class="ohwln3bng"/><path class="jyjk2cs2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:videocamera-one"} {...others} />);
}

export default Component;
