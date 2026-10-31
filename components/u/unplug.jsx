import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/r0ey916np.css';
import '../../css/s/sjh--5b7e.css';
import '../../css/g/gpw91obrn.css';
import '../../css/f/f3ydy3l6p.css';
import '../../css/v/vgsxhnmjv.css';
import '../../css/n/nwncifbvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="r0ey916np"/><path class="sjh--5b7e wm-shine"/><path class="gpw91obrn wm-k"/><path class="f3ydy3l6p wm-a"/><path class="vgsxhnmjv wm-s"/><path class="nwncifbvd wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:unplug"} {...others} />);
}

export default Component;
