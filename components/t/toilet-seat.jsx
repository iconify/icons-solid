import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkbu6rbzh.css';
import '../../css/l/ltsvgdbwv.css';
import '../../css/c/c3i6vcblx.css';
import '../../css/p/pv6wsrs9p.css';
import '../../css/o/o_6nmt7ze.css';
import '../../css/o/ohyb81c6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hkbu6rbzh"/><path class="ltsvgdbwv"/><path class="c3i6vcblx"/><path class="pv6wsrs9p"/><path class="o_6nmt7ze"/><path class="ohyb81c6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:toilet-seat"} {...others} />);
}

export default Component;
