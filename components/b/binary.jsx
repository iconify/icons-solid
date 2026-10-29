import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/a/ab2thgbye.css';
import '../../css/h/hh92dyb1l.css';
import '../../css/j/jb-7olb0b.css';
import '../../css/n/n0u07879a.css';
import '../../css/x/xbz5e7b3f.css';
import '../../css/o/oji-pf87i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ab2thgbye wm-shadow"/><path class="hh92dyb1l"/><path class="jb-7olb0b"/><path class="n0u07879a"/><path class="wm-shine xbz5e7b3f"/><path class="oji-pf87i wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:binary"} {...others} />);
}

export default Component;
