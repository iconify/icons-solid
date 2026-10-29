import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/h/higyq-bzk.css';
import '../../css/l/lvwtsacyh.css';
import '../../css/g/gndm8ubmm.css';
import '../../css/p/pf1-z5xoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="higyq-bzk"/><path class="lvwtsacyh"/><path class="gndm8ubmm wm-shine"/><path class="pf1-z5xoz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:table"} {...others} />);
}

export default Component;
