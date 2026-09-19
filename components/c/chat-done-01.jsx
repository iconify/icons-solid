import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qvno_evfq.css';
import '../../css/a/aqd-nhlay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qvno_evfq"/><path class="aqd-nhlay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-done-01"} {...others} />);
}

export default Component;
