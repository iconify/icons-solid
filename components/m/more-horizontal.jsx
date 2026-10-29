import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/td6d03bko.css';
import '../../css/w/wqipoxb1e.css';
import '../../css/b/b-emnbbki.css';
import '../../css/l/lfk7tkbee.css';
import '../../css/j/jy843347v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="td6d03bko wm-shadow"/><path class="wqipoxb1e"/><path class="b-emnbbki"/><path class="lfk7tkbee"/><path class="jy843347v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:more-horizontal"} {...others} />);
}

export default Component;
