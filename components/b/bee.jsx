import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a3ql5twwq.css';
import '../../css/a/aq5vigbuw.css';
import '../../css/h/hcqwz0r-m.css';
import '../../css/i/i8b26ybmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a3ql5twwq wm-shadow"/><path class="aq5vigbuw wm-shadow"/><path class="hcqwz0r-m"/><path class="i8b26ybmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bee"} {...others} />);
}

export default Component;
