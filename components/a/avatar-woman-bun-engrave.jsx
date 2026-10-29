import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x631pqb1u.css';
import '../../css/z/z0n9bb6hx.css';
import '../../css/y/y-rjltu9b.css';
import '../../css/o/o9wp5rbfh.css';
import '../../css/m/msfwckeky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k x631pqb1u"/><path class="wm-a z0n9bb6hx"/><path class="wm-shadow y-rjltu9b"/><path class="o9wp5rbfh wm-k"/><path class="msfwckeky wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-bun-engrave"} {...others} />);
}

export default Component;
