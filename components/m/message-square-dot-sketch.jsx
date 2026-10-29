import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/blrw_ccba.css';
import '../../css/v/vrq2xh5oj.css';
import '../../css/z/zf8t9262c.css';
import '../../css/h/h0tlrdy7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="blrw_ccba"/><path class="vrq2xh5oj wm-k"/><path class="wm-k zf8t9262c"/><path class="h0tlrdy7i wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:message-square-dot-sketch"} {...others} />);
}

export default Component;
