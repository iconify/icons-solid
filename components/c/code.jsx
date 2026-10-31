import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jwavoch6p.css';
import '../../css/y/yfoambcqa.css';
import '../../css/n/nq_8ikpiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jwavoch6p wm-shadow"/><path class="wm-shadow yfoambcqa"/><path class="nq_8ikpiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:code"} {...others} />);
}

export default Component;
