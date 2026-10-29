import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ymj72m3on.css';
import '../../css/j/j4ab3o1lc.css';
import '../../css/v/vg4wljx0i.css';
import '../../css/s/ss65gqp3r.css';
import '../../css/d/d_2gsephd.css';
import '../../css/l/lyhf68kml.css';
import '../../css/h/hj-m44bje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow ymj72m3on"/><path class="j4ab3o1lc"/><path class="vg4wljx0i"/><path class="ss65gqp3r"/><path class="d_2gsephd"/><path class="lyhf68kml wm-shine"/><path class="hj-m44bje wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:thumbs-up"} {...others} />);
}

export default Component;
