import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eso-fhbfk.css';
import '../../css/y/ycpffxzkv.css';
import '../../css/y/y8d3_gc7o.css';
import '../../css/x/xe7dljbdl.css';
import '../../css/a/azx70rbck.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="eso-fhbfk"/><path class="ycpffxzkv"/><path class="y8d3_gc7o"/><path class="xe7dljbdl"/><path class="azx70rbck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:llama"} {...others} />);
}

export default Component;
