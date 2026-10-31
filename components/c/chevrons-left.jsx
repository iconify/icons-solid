import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w1786d5mz.css';
import '../../css/w/wnbic79xe.css';
import '../../css/e/er7rs_byh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w1786d5mz wm-shadow"/><path class="wm-shadow wnbic79xe"/><path class="er7rs_byh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chevrons-left"} {...others} />);
}

export default Component;
