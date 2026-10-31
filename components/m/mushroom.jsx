import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g9ymsib5c.css';
import '../../css/b/b3sm3p68z.css';
import '../../css/i/iycs7wjzl.css';
import '../../css/t/tsi5nvbml.css';
import '../../css/l/lisx4xbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="g9ymsib5c"/><path class="b3sm3p68z wm-shine"/><path class="iycs7wjzl wm-k"/><path class="tsi5nvbml wm-a"/><path class="lisx4xbvx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:mushroom"} {...others} />);
}

export default Component;
