import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh9p_6w5s.css';
import '../../css/y/y2yxtt6_c.css';
import '../../css/l/lhb-r0bja.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yh9p_6w5s"/><path class="y2yxtt6_c"/><path class="lhb-r0bja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lighthouse-48"} {...others} />);
}

export default Component;
