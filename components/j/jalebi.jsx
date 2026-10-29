import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uxrwcgbvs.css';
import '../../css/t/tuttxcc6d.css';
import '../../css/a/aoc9rf24c.css';
import '../../css/n/n1va0bchb.css';
import '../../css/i/ii1hn--6r.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="uxrwcgbvs wm-shadow"/><path class="tuttxcc6d"/><path class="aoc9rf24c"/><path class="n1va0bchb"/><path class="ii1hn--6r wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:jalebi"} {...others} />);
}

export default Component;
