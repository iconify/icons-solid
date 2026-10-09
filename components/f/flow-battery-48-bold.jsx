import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9g9dcbtj.css';
import '../../css/l/l45xzzbew.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v9g9dcbtj"/><path class="l45xzzbew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flow-battery-48-bold"} {...others} />);
}

export default Component;
