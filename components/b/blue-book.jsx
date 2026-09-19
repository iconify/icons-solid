import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/heic6riuh.css';
import '../../css/e/e3idh-b6l.css';
import '../../css/r/r3dusdbez.css';
import '../../css/e/enmu-w24f.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="heic6riuh"/><path class="e3idh-b6l"/><path class="r3dusdbez"/><path class="enmu-w24f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:blue-book"} {...others} />);
}

export default Component;
