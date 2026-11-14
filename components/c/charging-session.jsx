import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mf1qfwb3p.css';
import '../../css/c/c3ra92qkt.css';
import '../../css/q/qvpu09b-s.css';
import '../../css/r/ru3w0x1yt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mf1qfwb3p"/><path class="c3ra92qkt"/><path class="qvpu09b-s"/><path class="ru3w0x1yt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-session"} {...others} />);
}

export default Component;
