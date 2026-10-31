import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zh6imhb-f.css';
import '../../css/f/fbk8z1bnm.css';
import '../../css/r/rsyvdzbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zh6imhb-f"/><path class="fbk8z1bnm wm-shadow"/><path class="rsyvdzbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chart-spline"} {...others} />);
}

export default Component;
