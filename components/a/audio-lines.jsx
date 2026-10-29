import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/ziakh6bgg.css';
import '../../css/r/rcjrd6b6o.css';
import '../../css/o/oh491ac3i.css';
import '../../css/w/wjjiplb7i.css';
import '../../css/u/udqolobke.css';
import '../../css/z/z-tipkb4f.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow ziakh6bgg"/><path class="rcjrd6b6o"/><path class="oh491ac3i"/><path class="wjjiplb7i"/><path class="udqolobke wm-shine"/><path class="wm-deco z-tipkb4f"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:audio-lines"} {...others} />);
}

export default Component;
