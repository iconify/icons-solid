import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k5t-zhrxr.css';
import '../../css/x/xnqho3vsb.css';
import '../../css/u/u5pkhhcvy.css';
import '../../css/g/g01svf7ox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="k5t-zhrxr wm-a"/><path class="wm-k xnqho3vsb"/><path class="u5pkhhcvy wm-k"/><path class="g01svf7ox wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:columns-sketch"} {...others} />);
}

export default Component;
