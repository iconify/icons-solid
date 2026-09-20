import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zoesmodmk.css';
import '../../css/t/ttzt4z-9m.css';
import '../../css/y/yufc5vx2m.css';
import '../../css/d/dht3clk_c.css';
import '../../css/j/jogpa7blj.css';
import '../../css/z/zvq0ovbdy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zoesmodmk"/><path class="ttzt4z-9m"/><path class="yufc5vx2m"/><path class="dht3clk_c"/><path class="jogpa7blj"/><path class="zvq0ovbdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:arrow-double-down-1"} {...others} />);
}

export default Component;
