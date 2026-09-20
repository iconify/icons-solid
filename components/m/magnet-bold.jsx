import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6ujfib6g.css';
import '../../css/l/la5t6nb-e.css';
import '../../css/t/tt7e65bxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="u6ujfib6g"/><path class="la5t6nb-e"/><path class="tt7e65bxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-bold"} {...others} />);
}

export default Component;
