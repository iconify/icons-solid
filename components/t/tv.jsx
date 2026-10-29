import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kce6bb42u.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/epk1ccbwt.css';
import '../../css/x/x9ukzibsq.css';
import '../../css/c/cwe3tibfh.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pmnqii5fr.css';
import '../../css/b/b7lzqcb2h.css';
import '../../css/r/rkyqt9b6n.css';
import '../../css/v/vonb3q4ol.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGAecexdrg" class="kce6bb42u"/></defs><g class="t_2lkqbxb"><path class="epk1ccbwt wm-shadow"/><path class="x9ukzibsq"/><path class="cwe3tibfh"/><use href="#SVGAecexdrg" class="d2kvgvbvc"/><path class="pmnqii5fr"/><use href="#SVGAecexdrg" class="d2kvgvbvc"/><path class="b7lzqcb2h"/><path class="rkyqt9b6n"/><path class="vonb3q4ol wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:tv"} {...others} />);
}

export default Component;
