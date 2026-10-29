import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/orwwumbrh.css';
import '../../css/o/ohvhcbbnf.css';
import '../../css/z/z7ccrjb5e.css';
import '../../css/m/mfw9p836g.css';
import '../../css/l/lp4l-3bul.css';
import '../../css/f/fdlyysbez.css';
import '../../css/y/y5csqvbrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="orwwumbrh wm-shadow"/><path class="ohvhcbbnf"/><path class="z7ccrjb5e"/><path class="mfw9p836g"/><path class="lp4l-3bul"/><path class="fdlyysbez wm-shine"/><path class="wm-deco y5csqvbrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:sparkles"} {...others} />);
}

export default Component;
