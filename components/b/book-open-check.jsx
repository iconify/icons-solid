import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tnv2-7mbf.css';
import '../../css/z/zlaedzsmm.css';
import '../../css/k/kino_kbko.css';
import '../../css/y/y9bey_bio.css';
import '../../css/g/gokj1ccws.css';
import '../../css/i/ic12qmb9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="tnv2-7mbf wm-shadow"/><path class="zlaedzsmm"/><path class="kino_kbko"/><path class="y9bey_bio"/><path class="gokj1ccws wm-shine"/><path class="ic12qmb9a wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:book-open-check"} {...others} />);
}

export default Component;
