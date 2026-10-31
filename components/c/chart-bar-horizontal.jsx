import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sjv9wy0ft.css';
import '../../css/h/hjd5wlsvp.css';
import '../../css/c/cy-437bpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sjv9wy0ft wm-shadow"/><path class="hjd5wlsvp wm-shadow"/><path class="cy-437bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chart-bar-horizontal"} {...others} />);
}

export default Component;
