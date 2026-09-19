import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otlqk0b1f.css';
import '../../css/t/tb6awyqzo.css';
import '../../css/u/urbqht-8j.css';
import '../../css/k/k55t2xkdm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="otlqk0b1f"/><path clip-rule="evenodd" class="tb6awyqzo"/><path class="urbqht-8j"/><path clip-rule="evenodd" class="k55t2xkdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:laptop-code-outline"} {...others} />);
}

export default Component;
