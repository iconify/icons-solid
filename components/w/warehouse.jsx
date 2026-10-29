import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/guhtw-bgn.css';
import '../../css/w/w-x2erb2e.css';
import '../../css/a/aji59v5od.css';
import '../../css/h/h2lkeab8t.css';
import '../../css/r/r_4bfna7m.css';
import '../../css/f/ft1fgmbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="guhtw-bgn wm-shadow"/><path class="w-x2erb2e"/><path class="aji59v5od"/><path class="h2lkeab8t"/><path class="r_4bfna7m wm-shine"/><path class="ft1fgmbyn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:warehouse"} {...others} />);
}

export default Component;
