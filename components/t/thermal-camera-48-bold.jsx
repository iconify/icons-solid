import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n669t5b-i.css';
import '../../css/d/d1jrieb7c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n669t5b-i"/><path class="d1jrieb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-camera-48-bold"} {...others} />);
}

export default Component;
