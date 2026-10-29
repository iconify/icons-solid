import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fy4b82p3n.css';
import '../../css/o/o88baccah.css';
import '../../css/x/xlte3f1_d.css';
import '../../css/j/j1hn33baz.css';
import '../../css/i/i4xcgcc5j.css';
import '../../css/c/cn2_q0e6z.css';
import '../../css/d/d1jzidh8m.css';
import '../../css/s/spcrfc8qp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fy4b82p3n wm-shadow"/><path class="o88baccah"/><path class="xlte3f1_d"/><path class="j1hn33baz"/><path class="i4xcgcc5j"/><path class="cn2_q0e6z"/><path class="d1jzidh8m wm-shine"/><path class="spcrfc8qp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:list"} {...others} />);
}

export default Component;
