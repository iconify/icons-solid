import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b2thi6bbu.css';
import '../../css/h/h-4p18bfi.css';
import '../../css/z/zsodzxbaw.css';
import '../../css/z/zajq2xl3u.css';
import '../../css/f/fgia7kb0e.css';
import '../../css/m/mg1snjbtq.css';
import '../../css/a/aw01eab_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="b2thi6bbu wm-shadow"/><path class="h-4p18bfi"/><path class="zsodzxbaw"/><path class="zajq2xl3u"/><path class="fgia7kb0e"/><path class="mg1snjbtq wm-shine"/><path class="aw01eab_c wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:edit"} {...others} />);
}

export default Component;
