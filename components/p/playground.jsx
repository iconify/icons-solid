import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdg2xbckk.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wp8n82nzp.css';
import '../../css/w/wwtyb_bsg.css';
import '../../css/t/ts-p6jj4n.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b95gq-bzd.css';
import '../../css/j/j9429-rqy.css';
import '../../css/t/tmw7ssh_r.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG4xLRAcdQ" class="xdg2xbckk"/></defs><g class="t_2lkqbxb"><path class="wm-shadow wp8n82nzp"/><path class="wwtyb_bsg"/><path class="ts-p6jj4n"/><use href="#SVG4xLRAcdQ" class="d2kvgvbvc"/><path class="b95gq-bzd"/><use href="#SVG4xLRAcdQ" class="d2kvgvbvc"/><path class="j9429-rqy"/><path class="tmw7ssh_r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:playground"} {...others} />);
}

export default Component;
