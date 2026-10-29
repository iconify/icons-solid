import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cagecrcfk.css';
import '../../css/w/woz2f9b9j.css';
import '../../css/c/caw5qabew.css';
import '../../css/a/a74ox2l4b.css';
import '../../css/l/l-if2ibsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cagecrcfk wm-k"/><path class="wm-a woz2f9b9j"/><path class="caw5qabew wm-shadow"/><path class="a74ox2l4b wm-k"/><path class="l-if2ibsb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:regex-engrave"} {...others} />);
}

export default Component;
