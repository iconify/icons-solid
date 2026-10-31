import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zt8qp-bcq.css';
import '../../css/h/hovqdupur.css';
import '../../css/q/qdrwleuih.css';
import '../../css/i/i5_9fub6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zt8qp-bcq"/><path class="hovqdupur wm-shadow"/><path class="qdrwleuih"/><path class="i5_9fub6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:fan"} {...others} />);
}

export default Component;
