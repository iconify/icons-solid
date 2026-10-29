import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/c/coynxabas.css';
import '../../css/j/jooboubak.css';
import '../../css/u/urb7o3b0n.css';
import '../../css/j/j2u0o7bci.css';
import '../../css/g/ggtn94bbo.css';
import '../../css/o/oji-pf87i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="coynxabas wm-shadow"/><path class="jooboubak"/><path class="urb7o3b0n"/><path class="j2u0o7bci"/><path class="ggtn94bbo wm-shine"/><path class="oji-pf87i wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:badge-dollar-sign"} {...others} />);
}

export default Component;
