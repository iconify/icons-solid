import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a5ht9ubqz.css';
import '../../css/z/zwq6klb6b.css';
import '../../css/h/h5hbfd1hi.css';
import '../../css/n/nkuopefrk.css';
import '../../css/f/fam63c-5b.css';
import '../../css/t/t20ne0f3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="a5ht9ubqz wm-shadow"/><path class="zwq6klb6b"/><path class="h5hbfd1hi"/><path class="nkuopefrk"/><path class="fam63c-5b wm-shine"/><path class="t20ne0f3d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:minimize"} {...others} />);
}

export default Component;
