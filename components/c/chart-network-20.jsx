import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5-m_mbgb.css';
import '../../css/i/i68tsac5f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f5-m_mbgb"/><path class="i68tsac5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-network-20"} {...others} />);
}

export default Component;
