import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzuye7bdg.css';
import '../../css/i/i1v6ehc1q.css';
import '../../css/q/quc7lbb4r.css';
import '../../css/p/pqk1b9klz.css';
import '../../css/a/am0cxhbix.css';
import '../../css/r/rjas32bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow wzuye7bdg"/><path class="i1v6ehc1q"/><path class="quc7lbb4r"/><path class="pqk1b9klz"/><path class="am0cxhbix wm-shine"/><path class="rjas32bmi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:shield-half"} {...others} />);
}

export default Component;
