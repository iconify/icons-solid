import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kfszy2bqf.css';
import '../../css/f/f-hmxdbft.css';
import '../../css/b/bejri_bht.css';
import '../../css/n/n4z21sb7w.css';
import '../../css/o/ondz9cb4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="kfszy2bqf wm-k"/><path class="f-hmxdbft wm-a"/><path class="bejri_bht wm-shadow"/><path class="n4z21sb7w wm-k"/><path class="ondz9cb4u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:monitor-engrave"} {...others} />);
}

export default Component;
