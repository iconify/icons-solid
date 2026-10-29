import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lock2qbde.css';
import '../../css/g/gzgf-5b-e.css';
import '../../css/r/rfkcivbhm.css';
import '../../css/y/ync1i8xbe.css';
import '../../css/y/yr3ufdcdf.css';
import '../../css/f/fmbyngogw.css';
import '../../css/a/aqn0p1b-b.css';
import '../../css/w/wdphd8b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lock2qbde wm-shadow"/><path class="gzgf-5b-e"/><path class="rfkcivbhm"/><path class="ync1i8xbe"/><path class="yr3ufdcdf"/><path class="fmbyngogw"/><path class="aqn0p1b-b wm-shine"/><path class="wdphd8b3t wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cloud-lightning"} {...others} />);
}

export default Component;
