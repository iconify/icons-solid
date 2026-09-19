import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/detpangpq.css';
import '../../css/m/mksr0ox_g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="detpangpq"/><path class="mksr0ox_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:basketball-bold"} {...others} />);
}

export default Component;
