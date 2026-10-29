import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y54ajsbap.css';
import '../../css/v/vneg5ccou.css';
import '../../css/a/apg-cbbxs.css';
import '../../css/x/xuvakobqo.css';
import '../../css/q/q_4jikc6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="y54ajsbap"/><path class="vneg5ccou wm-k"/><path class="apg-cbbxs wm-a"/><path class="wm-k xuvakobqo"/><path class="q_4jikc6k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bookmark-check-sketch"} {...others} />);
}

export default Component;
