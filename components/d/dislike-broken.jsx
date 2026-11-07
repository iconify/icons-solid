import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z_plnwe8g.css';
import '../../css/l/lmh6yib_l.css';
import '../../css/v/v0-4-h-2h.css';
import '../../css/e/eymym15ry.css';
import '../../css/d/due70sa8a.css';
import '../../css/x/x555n9v5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z_plnwe8g"/><path class="lmh6yib_l"/><path class="v0-4-h-2h"/><path class="eymym15ry"/><path class="due70sa8a"/><path class="x555n9v5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dislike-broken"} {...others} />);
}

export default Component;
