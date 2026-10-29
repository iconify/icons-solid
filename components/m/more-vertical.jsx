import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/g95zxtbyl.css';
import '../../css/t/t_4fe8b5i.css';
import '../../css/d/dgsy4dbep.css';
import '../../css/x/xz_tv_b7d.css';
import '../../css/a/a1a9w6bmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="g95zxtbyl wm-shadow"/><path class="t_4fe8b5i"/><path class="dgsy4dbep"/><path class="xz_tv_b7d"/><path class="a1a9w6bmd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:more-vertical"} {...others} />);
}

export default Component;
