import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l-5n86b-i.css';
import '../../css/l/li_x_qb7t.css';
import '../../css/q/q4fuubn3g.css';
import '../../css/f/fpmrqqzwz.css';
import '../../css/y/yjogm03ma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="l-5n86b-i"/><path class="li_x_qb7t"/><path class="q4fuubn3g"/><path clip-rule="evenodd" class="fpmrqqzwz"/><path class="yjogm03ma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-2-bold"} {...others} />);
}

export default Component;
