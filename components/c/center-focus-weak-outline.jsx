import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwbkvzbum.css';
import '../../css/w/wru2hjbce.css';
import '../../css/w/w9zvo0bsa.css';
import '../../css/r/r4qpo7nqr.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="qwbkvzbum"/><path clip-rule="evenodd" class="wru2hjbce"/><path class="w9zvo0bsa"/><path clip-rule="evenodd" class="r4qpo7nqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:center-focus-weak-outline"} {...others} />);
}

export default Component;
