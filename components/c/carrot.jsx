import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2yjzwpcq.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/cf4e6rb1a.css';
import '../../css/y/ya3tgxbbi.css';
import '../../css/o/od3mqvqhs.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hnx-jubgz.css';
import '../../css/g/gn_lbhbso.css';
import '../../css/h/h1g1i7b3q.css';
import '../../css/x/xlu0s1bji.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG15rHQebF" class="z2yjzwpcq"/></defs><g class="t_2lkqbxb"><path class="cf4e6rb1a wm-shadow"/><path class="ya3tgxbbi"/><path class="od3mqvqhs"/><use href="#SVG15rHQebF" class="d2kvgvbvc"/><path class="hnx-jubgz"/><use href="#SVG15rHQebF" class="d2kvgvbvc"/><path class="gn_lbhbso"/><path class="h1g1i7b3q wm-shine"/><path class="wm-deco xlu0s1bji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:carrot"} {...others} />);
}

export default Component;
