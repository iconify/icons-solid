import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr7h2fb6d.css';
import '../../css/y/ylzp1rbck.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lr7h2fb6d"/><path class="ylzp1rbck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:checkbox-48"} {...others} />);
}

export default Component;
