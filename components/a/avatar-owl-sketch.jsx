import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/go7m5qb9b.css';
import '../../css/j/jfnbg6t3e.css';
import '../../css/b/b5iz41bba.css';
import '../../css/g/gkbm3cc5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="go7m5qb9b"/><path class="jfnbg6t3e wm-k"/><path class="b5iz41bba wm-k"/><path class="gkbm3cc5v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-owl-sketch"} {...others} />);
}

export default Component;
