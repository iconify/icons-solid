import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbmpiqbiz.css';
import '../../css/r/rcdbnd-dt.css';
import '../../css/w/wbtogqaxx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nbmpiqbiz"/><path class="rcdbnd-dt"/><path class="wbtogqaxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-exchanger-48-bold"} {...others} />);
}

export default Component;
