import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vsv0pig3s.css';
import '../../css/r/ra-o12qfd.css';
import '../../css/p/pv4cg3-5q.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="vsv0pig3s"/><path class="ra-o12qfd"/><path class="pv4cg3-5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:delete-collection"} {...others} />);
}

export default Component;
