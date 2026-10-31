import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l0_ma0bfq.css';
import '../../css/v/vyu7oygnb.css';
import '../../css/s/sgrqeknne.css';
import '../../css/d/d-q6e3btr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="l0_ma0bfq wm-shadow"/><path class="vyu7oygnb wm-shadow"/><path class="sgrqeknne"/><path class="d-q6e3btr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:laptop"} {...others} />);
}

export default Component;
