import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wop4crbve.css';
import '../../css/r/r3rj8nbts.css';
import '../../css/r/rt4-vfbde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow wop4crbve"/><path class="r3rj8nbts wm-shadow"/><path class="rt4-vfbde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:reply-all"} {...others} />);
}

export default Component;
