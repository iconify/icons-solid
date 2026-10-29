import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yajfkvyqx.css';
import '../../css/e/e9u15lb3q.css';
import '../../css/o/opi96xvus.css';
import '../../css/u/uxsptjbvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yajfkvyqx"/><path class="e9u15lb3q wm-shadow"/><path class="opi96xvus wm-k"/><path class="uxsptjbvt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wine-engrave"} {...others} />);
}

export default Component;
