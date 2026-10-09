import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stamzdbdq.css';
import '../../css/t/tusg1jm7w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="stamzdbdq"/><path class="tusg1jm7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-lock-48-bold"} {...others} />);
}

export default Component;
