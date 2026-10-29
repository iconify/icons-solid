import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zhfr4tbaq.css';
import '../../css/e/eo_o8eb7r.css';
import '../../css/t/tqwue9bav.css';
import '../../css/g/g-wgd2bcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zhfr4tbaq"/><path class="eo_o8eb7r wm-k"/><path class="tqwue9bav wm-a"/><path class="g-wgd2bcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-bun-sketch"} {...others} />);
}

export default Component;
