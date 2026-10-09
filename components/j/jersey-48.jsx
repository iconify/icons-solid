import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc9z0ibda.css';
import '../../css/m/m_t120kfw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uc9z0ibda"/><path class="m_t120kfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jersey-48"} {...others} />);
}

export default Component;
