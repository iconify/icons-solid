import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik8j_0m_s.css';
import '../../css/l/lm0uu894d.css';
import '../../css/i/iltdgbc8d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ik8j_0m_s"/><path class="lm0uu894d"/><path class="iltdgbc8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:nav-anomaly-detection"} {...others} />);
}

export default Component;
