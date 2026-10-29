import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bblocnb2q.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m3qupmbqg.css';
import '../../css/o/obq-_x5yg.css';
import '../../css/u/uxtz57zru.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ui1skebot.css';
import '../../css/g/gp897-i4h.css';
import '../../css/d/djnawfwwt.css';
import '../../css/m/m04tjvb2k.css';
import '../../css/o/oji-pf87i.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGjJMtYjkd" class="bblocnb2q"/></defs><g class="t_2lkqbxb"><path class="m3qupmbqg wm-shadow"/><path class="obq-_x5yg"/><path class="uxtz57zru"/><use href="#SVGjJMtYjkd" class="d2kvgvbvc"/><path class="ui1skebot"/><use href="#SVGjJMtYjkd" class="d2kvgvbvc"/><path class="gp897-i4h"/><path class="djnawfwwt"/><path class="m04tjvb2k wm-shine"/><path class="oji-pf87i wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:apple"} {...others} />);
}

export default Component;
