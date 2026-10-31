import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/usg3cfh9t.css';
import '../../css/r/r7uws0-lq.css';
import '../../css/f/f0g3g2bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="usg3cfh9t wm-shadow"/><path class="r7uws0-lq wm-shadow"/><path class="f0g3g2bxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chart-bar-increasing"} {...others} />);
}

export default Component;
