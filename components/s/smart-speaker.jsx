import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/si1cz-b_m.css';
import '../../css/d/d3gb1uvps.css';
import '../../css/i/i4o9y09nw.css';
import '../../css/l/lfxab_yhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="si1cz-b_m"/><path class="d3gb1uvps"/><path clip-rule="evenodd" class="i4o9y09nw"/><path class="lfxab_yhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:smart-speaker"} {...others} />);
}

export default Component;
