import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c8i5flb4l.css';
import '../../css/a/acc9nobeq.css';
import '../../css/x/xbkcgpbuj.css';
import '../../css/y/yft4l7x7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="c8i5flb4l wm-deco"/><path class="acc9nobeq wm-k"/><path class="wm-a xbkcgpbuj"/><circle class="wm-s yft4l7x7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rakhi-sketch"} {...others} />);
}

export default Component;
