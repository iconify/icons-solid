import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0831w-9e.css';
import '../../css/b/bm3dyy1hb.css';
import '../../css/f/f1qu4wb2w.css';
import '../../css/t/tpznr8t4q.css';
import '../../css/t/tvj_0cc0e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q0831w-9e"/><path class="bm3dyy1hb"/><path class="f1qu4wb2w"/><path class="tpznr8t4q"/><path class="tvj_0cc0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:online-medical-web-service"} {...others} />);
}

export default Component;
