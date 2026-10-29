import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k8lm2lbuk.css';
import '../../css/v/v2fmt0w0l.css';
import '../../css/w/w1xddhzep.css';
import '../../css/w/wm5gb2b7r.css';
import '../../css/n/n9yd8kbzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="k8lm2lbuk wm-k"/><path class="v2fmt0w0l wm-a"/><path class="w1xddhzep wm-shadow"/><path class="wm-k wm5gb2b7r"/><path class="n9yd8kbzk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:reply-all-engrave"} {...others} />);
}

export default Component;
