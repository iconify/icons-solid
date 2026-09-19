import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pq5e0lw6b.css';
import '../../css/d/d2ja3uk6v.css';
import '../../css/d/dsk89bmik.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="pq5e0lw6b"><path class="d2ja3uk6v"/><path class="dsk89bmik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:rotate"} {...others} />);
}

export default Component;
