import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tk59wev6l.css';
import '../../css/s/sydq02bwc.css';
import '../../css/a/aoh6wnqhm.css';
import '../../css/o/o-24k7b5h.css';
import '../../css/v/vyv32nzpa.css';
import '../../css/t/t45uyab2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tk59wev6l wm-shadow"/><path class="sydq02bwc"/><path class="aoh6wnqhm"/><path class="o-24k7b5h"/><path class="vyv32nzpa wm-shine"/><path class="t45uyab2x wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:book"} {...others} />);
}

export default Component;
