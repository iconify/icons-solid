import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tnv2-7mbf.css';
import '../../css/z/zlaedzsmm.css';
import '../../css/e/eq4wnji3e.css';
import '../../css/v/v-f37z4cn.css';
import '../../css/e/enxzcn4db.css';
import '../../css/m/m2irt6q2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tnv2-7mbf wm-shadow"/><path class="zlaedzsmm"/><path class="eq4wnji3e"/><path class="v-f37z4cn"/><path class="enxzcn4db wm-shine"/><path class="m2irt6q2n wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:book-open-text"} {...others} />);
}

export default Component;
