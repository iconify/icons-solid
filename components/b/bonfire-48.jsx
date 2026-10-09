import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pm29_vbfv.css';
import '../../css/q/q534ik57i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pm29_vbfv"/><path class="q534ik57i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bonfire-48"} {...others} />);
}

export default Component;
