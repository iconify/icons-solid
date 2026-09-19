import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5rnlpo5e.css';
import '../../css/r/rmhzubc9s.css';
import '../../css/m/mn0jc5v_r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r5rnlpo5e"/><circle class="rmhzubc9s"/><path class="mn0jc5v_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sim-card"} {...others} />);
}

export default Component;
