import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/l/le4nw3b-s.css';
import '../../css/e/e4ehvrk0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="l9lv5_bcf wm-k"/><path class="le4nw3b-s wm-a"/><path class="e4ehvrk0f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:scan-text"} {...others} />);
}

export default Component;
