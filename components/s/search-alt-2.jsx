import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jl39q2g0i.css';
import '../../css/o/oy0e--gjn.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="jl39q2g0i"/><path class="oy0e--gjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:search-alt-2"} {...others} />);
}

export default Component;
