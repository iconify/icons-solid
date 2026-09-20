import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/y4m37fb6o.css';
import '../../css/r/ra-o12qfd.css';
import '../../css/p/pv4cg3-5q.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="y4m37fb6o"/><path class="ra-o12qfd"/><path class="pv4cg3-5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:done-collection"} {...others} />);
}

export default Component;
