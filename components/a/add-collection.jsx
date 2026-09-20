import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/u/u09znn34h.css';
import '../../css/p/pv4cg3-5q.css';
import '../../css/r/ra-o12qfd.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="u09znn34h"/><path class="pv4cg3-5q"/><path class="ra-o12qfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:add-collection"} {...others} />);
}

export default Component;
