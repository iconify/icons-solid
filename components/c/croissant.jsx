import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/n6xp5s5zm.css';
import '../../css/m/mvplye3mo.css';
import '../../css/u/u8s-gjblx.css';
import '../../css/v/vmch0iu9s.css';
import '../../css/x/xtnakt1xw.css';
import '../../css/y/ytqn3q3es.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="n6xp5s5zm wm-shadow"/><path class="mvplye3mo"/><path class="u8s-gjblx"/><path class="vmch0iu9s"/><path class="wm-shine xtnakt1xw"/><path class="wm-deco ytqn3q3es"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:croissant"} {...others} />);
}

export default Component;
