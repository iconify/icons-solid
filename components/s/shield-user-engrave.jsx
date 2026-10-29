import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/o-2__xcxy.css';
import '../../css/y/ys3pdybei.css';
import '../../css/r/r3yr01bjg.css';
import '../../css/x/xrfn3bcyz.css';
import '../../css/q/q53cmxb6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="o-2__xcxy wm-k"/><path class="wm-a ys3pdybei"/><path class="r3yr01bjg wm-shadow"/><path class="wm-k xrfn3bcyz"/><path class="q53cmxb6m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-user-engrave"} {...others} />);
}

export default Component;
