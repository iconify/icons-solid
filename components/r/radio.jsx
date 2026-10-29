import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9rzg9b7u.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/s8ltwrb4f.css';
import '../../css/f/fk7yuepeb.css';
import '../../css/b/bjmpg7quh.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hs_sbdcup.css';
import '../../css/o/o95tg9cjv.css';
import '../../css/n/nw124mo1c.css';
import '../../css/i/ikwwupr0h.css';
import '../../css/w/wpjmhrbvg.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGhfb6jEVp" class="i9rzg9b7u"/></defs><g class="t_2lkqbxb"><path class="s8ltwrb4f wm-shadow"/><path class="fk7yuepeb"/><path class="bjmpg7quh"/><use href="#SVGhfb6jEVp" class="d2kvgvbvc"/><path class="hs_sbdcup"/><use href="#SVGhfb6jEVp" class="d2kvgvbvc"/><path class="o95tg9cjv"/><path class="nw124mo1c wm-shine"/><path class="ikwwupr0h wm-deco"/><path class="wm-deco wpjmhrbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:radio"} {...others} />);
}

export default Component;
