import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vk6q_hbyk.css';
import '../../css/n/nwzl3abzk.css';
import '../../css/d/drurmkqhp.css';
import '../../css/y/y-na78bap.css';
import '../../css/n/nk7xm8bgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vk6q_hbyk"/><path class="nwzl3abzk"/><path class="drurmkqhp"/><path class="y-na78bap"/><path class="nk7xm8bgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-2-broken"} {...others} />);
}

export default Component;
