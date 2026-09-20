import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q653w-bdk.css';
import '../../css/j/j8s9jybnb.css';
import '../../css/j/j0tapub8h.css';
import '../../css/f/fok36b39f.css';
import '../../css/z/z7cx2o8tr.css';
import '../../css/b/bm4xpn9je.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q653w-bdk"/><path clip-rule="evenodd" class="j8s9jybnb"/><path class="j0tapub8h"/><path class="fok36b39f"/><path class="z7cx2o8tr"/><path class="bm4xpn9je"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:nintendo-switch"} {...others} />);
}

export default Component;
