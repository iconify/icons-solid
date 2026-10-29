import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/k0vc6p57t.css';
import '../../css/a/akc_0-7ft.css';
import '../../css/p/p-gcg-b5i.css';
import '../../css/t/tsyo1ubkc.css';
import '../../css/u/u1-eq5b6y.css';
import '../../css/x/xf9s1fb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="k0vc6p57t wm-shadow"/><path class="akc_0-7ft"/><path class="p-gcg-b5i"/><path class="tsyo1ubkc"/><path class="u1-eq5b6y"/><path class="wm-deco xf9s1fb6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:turtle"} {...others} />);
}

export default Component;
