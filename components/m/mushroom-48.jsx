import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfyu3jekb.css';
import '../../css/f/fc-7_47pi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yfyu3jekb"/><path class="fc-7_47pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mushroom-48"} {...others} />);
}

export default Component;
