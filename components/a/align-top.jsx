import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/elwrwpzwt.css';
import '../../css/a/ask6e3ueu.css';
import '../../css/w/wj05nbxlz.css';
import '../../css/g/g4o146b6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="elwrwpzwt"/><path class="ask6e3ueu wm-shine"/><path class="wj05nbxlz wm-k"/><path class="g4o146b6z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:align-top"} {...others} />);
}

export default Component;
