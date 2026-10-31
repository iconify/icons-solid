import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fohb7689w.css';
import '../../css/o/ozhox9e-d.css';
import '../../css/p/p4b-8obnr.css';
import '../../css/t/tbbshccdj.css';
import '../../css/h/h9hqozbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fohb7689w"/><path class="ozhox9e-d wm-shine"/><path class="p4b-8obnr wm-k"/><path class="tbbshccdj wm-a"/><path class="h9hqozbfx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ear"} {...others} />);
}

export default Component;
