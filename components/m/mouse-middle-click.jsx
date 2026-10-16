import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv9d6acqy.css';
import '../../css/f/fyln2vbsb.css';
import '../../css/j/j7ixn3b2b.css';
import '../../css/y/y2hq5rbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dv9d6acqy"/><path class="fyln2vbsb"/><rect transform="matrix(-1 0 0 1 13.88 9.58)" class="j7ixn3b2b"/><path class="y2hq5rbdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-middle-click"} {...others} />);
}

export default Component;
