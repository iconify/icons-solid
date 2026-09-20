import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sex9wi6pa.css';
import '../../css/e/env-5pv1b.css';
import '../../css/w/wi9oep35x.css';
import '../../css/p/pn0v6mlvm.css';
import '../../css/f/fhiuaertw.css';
import '../../css/l/l6czwtbiw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sex9wi6pa"/><path class="env-5pv1b"/><path class="wi9oep35x"/><path class="pn0v6mlvm"/><path class="fhiuaertw"/><path class="l6czwtbiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-properties-bold"} {...others} />);
}

export default Component;
