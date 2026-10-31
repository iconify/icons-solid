import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iafzu8tkl.css';
import '../../css/i/ibovrxbyk.css';
import '../../css/a/a0_vrhbly.css';
import '../../css/s/sr1v5cckl.css';
import '../../css/o/o9ac5lbcz.css';
import '../../css/h/h8r5zqbql.css';
import '../../css/z/zxgmb8vgj.css';
import '../../css/r/rijntbq3l.css';
import '../../css/v/v_oy9actz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iafzu8tkl wm-k"/><path class="ibovrxbyk wm-a"/><path class="a0_vrhbly wm-deco"/><path class="sr1v5cckl wm-k"/><path class="o9ac5lbcz wm-a"/><path class="h8r5zqbql wm-shadow"/><path class="wm-shine zxgmb8vgj"/><path class="rijntbq3l wm-shine"/><path class="v_oy9actz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:folder-tree"} {...others} />);
}

export default Component;
