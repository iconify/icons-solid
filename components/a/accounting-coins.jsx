import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyk6v0bqn.css';
import '../../css/p/p-7qod6ma.css';
import '../../css/g/gcbw69b1m.css';
import '../../css/w/wk1viw-ed.css';
import '../../css/t/txyyn6b2d.css';
import '../../css/r/r1yr2t1lw.css';
import '../../css/v/v62zltbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wyk6v0bqn"/><path class="p-7qod6ma"/><path class="gcbw69b1m"/><path class="wk1viw-ed"/><path class="txyyn6b2d"/><path class="r1yr2t1lw"/><path class="v62zltbvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:accounting-coins"} {...others} />);
}

export default Component;
