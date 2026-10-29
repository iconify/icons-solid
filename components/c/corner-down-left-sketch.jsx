import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/af1frba3j.css';
import '../../css/w/wir0vbbwl.css';
import '../../css/t/tqv20l_mm.css';
import '../../css/f/f72lw2b8q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="af1frba3j wm-k"/><path class="wir0vbbwl wm-a"/><path class="tqv20l_mm wm-k"/><path class="f72lw2b8q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-down-left-sketch"} {...others} />);
}

export default Component;
