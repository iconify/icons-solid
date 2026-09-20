import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/rq67u_p4t.css';
import '../../css/j/j167gwmkm.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="rq67u_p4t"/><path class="j167gwmkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:sign-in-double-arrow-2"} {...others} />);
}

export default Component;
