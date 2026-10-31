import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h9euf_bze.css';
import '../../css/i/i29pzwzdk.css';
import '../../css/m/mmi-77tzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="h9euf_bze wm-k"/><path class="i29pzwzdk wm-a"/><path class="mmi-77tzp wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:shuffle"} {...others} />);
}

export default Component;
