import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/a7tzrfu3v.css';
import '../../css/t/tq0or871r.css';
import '../../css/v/v0n13_7_n.css';
import '../../css/x/x0cr1u99n.css';
import '../../css/x/xlz7ekbxq.css';
import '../../css/o/odb4jcbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="a7tzrfu3v wm-shadow"/><path class="tq0or871r"/><path class="v0n13_7_n"/><path class="x0cr1u99n"/><path class="wm-shine xlz7ekbxq"/><path class="odb4jcbcd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:stop"} {...others} />);
}

export default Component;
