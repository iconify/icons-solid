import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/y9-evrb5v.css';
import '../../css/l/ll0f9jbgg.css';
import '../../css/i/is8zuu89s.css';
import '../../css/g/gc3brk79d.css';
import '../../css/j/jgzmchb9b.css';
import '../../css/t/tv5yr4beu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow y9-evrb5v"/><path class="ll0f9jbgg"/><path class="is8zuu89s"/><path class="gc3brk79d"/><path class="jgzmchb9b wm-shine"/><path class="tv5yr4beu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:droplet"} {...others} />);
}

export default Component;
