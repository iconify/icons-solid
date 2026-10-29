import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/j9epgdbyc.css';
import '../../css/a/a_i4cbb8t.css';
import '../../css/d/ddrzvzbrm.css';
import '../../css/h/hwljj0bwk.css';
import '../../css/z/zue5atz8s.css';
import '../../css/g/g0nd9h36n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="j9epgdbyc wm-shadow"/><path class="a_i4cbb8t"/><path class="ddrzvzbrm"/><path class="hwljj0bwk"/><path class="wm-shine zue5atz8s"/><path class="g0nd9h36n wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chart-bar"} {...others} />);
}

export default Component;
