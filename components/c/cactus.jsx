import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z76l7yb_l.css';
import '../../css/i/iwhaml25c.css';
import '../../css/l/lrliqtbvo.css';
import '../../css/j/jzul1pbjt.css';
import '../../css/h/hb57eibkn.css';
import '../../css/y/yv6o9ub8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="z76l7yb_l"/><path class="iwhaml25c wm-shine"/><path class="lrliqtbvo wm-k"/><path class="jzul1pbjt wm-a"/><path class="hb57eibkn"/><path class="yv6o9ub8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cactus"} {...others} />);
}

export default Component;
