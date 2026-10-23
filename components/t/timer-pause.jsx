import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j73aidbfy.css';
import '../../css/u/upxs60bgh.css';
import '../../css/o/ollo1vbxs.css';
import '../../css/d/d006ogo3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j73aidbfy"/><path class="upxs60bgh"/><circle class="ollo1vbxs"/><path class="d006ogo3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:timer-pause"} {...others} />);
}

export default Component;
