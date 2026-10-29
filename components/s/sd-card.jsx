import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qz3aojb4u.css';
import '../../css/p/prnvmcbpg.css';
import '../../css/z/zdxbrbbwo.css';
import '../../css/p/p_w8tqbfq.css';
import '../../css/u/udbhaxbot.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qz3aojb4u wm-shadow"/><path class="prnvmcbpg"/><path class="zdxbrbbwo"/><path class="p_w8tqbfq"/><path class="udbhaxbot wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sd-card"} {...others} />);
}

export default Component;
