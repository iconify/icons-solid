import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qauc5-naj.css';
import '../../css/m/m4qc6k9qt.css';
import '../../css/k/ktk0lz7oj.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qauc5-naj"/><path class="m4qc6k9qt"/><path class="ktk0lz7oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:snow"} {...others} />);
}

export default Component;
