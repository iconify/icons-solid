import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6x8mkney.css';
import '../../css/x/xv4m_lf6m.css';
import '../../css/p/pirgpnhwz.css';
import '../../css/u/unh33db8g.css';
import '../../css/q/q2cwzhi4s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g6x8mkney"/><path class="xv4m_lf6m"/><path class="pirgpnhwz"/><path class="unh33db8g"/><path class="q2cwzhi4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wellhead-48"} {...others} />);
}

export default Component;
