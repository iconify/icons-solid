import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/w-9ilhvpt.css';
import '../../css/g/g10-tdb8p.css';
import '../../css/h/hnimnwzhe.css';
import '../../css/d/d20fw-7vw.css';
import '../../css/c/cjqspsbvh.css';
import '../../css/z/zyw_44vkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="w-9ilhvpt wm-shadow"/><path class="g10-tdb8p"/><path class="hnimnwzhe"/><path class="d20fw-7vw"/><path class="cjqspsbvh wm-shine"/><path class="wm-deco zyw_44vkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chevron-up"} {...others} />);
}

export default Component;
