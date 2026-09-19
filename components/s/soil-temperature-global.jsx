import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/fu46p8h6t.css';
import '../../css/u/uf_ra_buw.css';
import '../../css/m/m5e-wxbmk.css';
import '../../css/m/mqvchh6fi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="fu46p8h6t"/><path class="uf_ra_buw"/><path class="m5e-wxbmk"/><path class="mqvchh6fi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:soil-temperature-global"} {...others} />);
}

export default Component;
