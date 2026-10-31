import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hhv12y3up.css';
import '../../css/q/qok006pqr.css';
import '../../css/v/vqeyk70cs.css';
import '../../css/b/bmpq50y2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hhv12y3up wm-shadow"/><path class="qok006pqr wm-shadow"/><path class="vqeyk70cs"/><path class="bmpq50y2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bell"} {...others} />);
}

export default Component;
