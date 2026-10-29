import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/isw3a9bfx.css';
import '../../css/h/hg94g2l0y.css';
import '../../css/h/ha8t8wb5j.css';
import '../../css/v/vhfpmmrlu.css';
import '../../css/s/sss-bxb1u.css';
import '../../css/l/ll48iosqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="isw3a9bfx wm-shadow"/><path class="hg94g2l0y"/><path class="ha8t8wb5j"/><path class="vhfpmmrlu"/><path class="sss-bxb1u wm-shine"/><path class="ll48iosqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:hand"} {...others} />);
}

export default Component;
