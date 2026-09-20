import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pq-huebfb.css';
import '../../css/d/duigjdb_e.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><rect class="pq-huebfb"/><path class="duigjdb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:runframe"} {...others} />);
}

export default Component;
