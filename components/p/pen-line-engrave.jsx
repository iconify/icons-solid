import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bm0hm5bhn.css';
import '../../css/h/hst8ehbqd.css';
import '../../css/i/i6bzijq7p.css';
import '../../css/q/q19uih-go.css';
import '../../css/a/a0-g48brp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bm0hm5bhn wm-k"/><path class="hst8ehbqd wm-a"/><path class="i6bzijq7p wm-shadow"/><path class="q19uih-go wm-k"/><path class="a0-g48brp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pen-line-engrave"} {...others} />);
}

export default Component;
