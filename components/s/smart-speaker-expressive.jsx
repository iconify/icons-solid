import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ur4uqmbtb.css';
import '../../css/d/d3gb1uvps.css';
import '../../css/i/i4o9y09nw.css';
import '../../css/s/sranjbbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ur4uqmbtb"/><path class="d3gb1uvps"/><path clip-rule="evenodd" class="i4o9y09nw"/><path class="sranjbbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:smart-speaker-expressive"} {...others} />);
}

export default Component;
