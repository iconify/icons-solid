import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zy7_o34hr.css';
import '../../css/u/utc5knldc.css';
import '../../css/r/rhjbai1zz.css';
import '../../css/p/pxpw3tbul.css';
import '../../css/s/s3tl5gbrq.css';
import '../../css/o/oji-pf87i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow zy7_o34hr"/><path class="utc5knldc"/><path class="rhjbai1zz"/><path class="pxpw3tbul"/><path class="s3tl5gbrq wm-shine"/><path class="oji-pf87i wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:braces"} {...others} />);
}

export default Component;
