import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lh748kbhx.css';
import '../../css/e/e0cxrkqid.css';
import '../../css/y/y4umptz2l.css';
import '../../css/f/fcmkds6hr.css';
import '../../css/l/lpwkbr1lr.css';
import '../../css/e/eyndpzb-v.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="lh748kbhx wm-shadow"/><path class="e0cxrkqid"/><path class="y4umptz2l"/><path class="fcmkds6hr"/><path class="lpwkbr1lr wm-shine"/><path class="eyndpzb-v wm-deco"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-down"} {...others} />);
}

export default Component;
