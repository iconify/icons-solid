import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pxct46bku.css';
import '../../css/k/k47f7hbpk.css';
import '../../css/b/bx17z-g6f.css';
import '../../css/h/h44u2vsze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="pxct46bku wm-shadow"/><path class="k47f7hbpk wm-shadow"/><path class="bx17z-g6f"/><path class="h44u2vsze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:tooth"} {...others} />);
}

export default Component;
