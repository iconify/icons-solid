import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zm6l6dbem.css';
import '../../css/a/aj7ix0boz.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/k/kgg3xb7jo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zm6l6dbem"/><path class="aj7ix0boz wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="kgg3xb7jo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:contrast"} {...others} />);
}

export default Component;
