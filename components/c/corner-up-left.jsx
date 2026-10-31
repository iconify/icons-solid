import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/fylkm3hdn.css';
import '../../css/e/eo2p60b6l.css';
import '../../css/z/z9a0h3b_x.css';
import '../../css/q/qe8qxn9nk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="fylkm3hdn wm-shadow"/><path class="eo2p60b6l wm-shadow"/><path class="z9a0h3b_x"/><path class="qe8qxn9nk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:corner-up-left"} {...others} />);
}

export default Component;
