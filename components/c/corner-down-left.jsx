import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x5v90kb3z.css';
import '../../css/b/b1qu_d_3r.css';
import '../../css/s/ssxx82d1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k x5v90kb3z"/><path class="b1qu_d_3r wm-a"/><path class="ssxx82d1m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:corner-down-left"} {...others} />);
}

export default Component;
