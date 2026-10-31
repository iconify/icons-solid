import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dh486wb0o.css';
import '../../css/v/v3zat68yy.css';
import '../../css/g/gef53ccpz.css';
import '../../css/j/j_0c_ccnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dh486wb0o wm-k"/><path class="v3zat68yy wm-a"/><path class="gef53ccpz wm-shine"/><path class="j_0c_ccnp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:chopsticks"} {...others} />);
}

export default Component;
