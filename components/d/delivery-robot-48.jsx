import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-rt1kbiq.css';
import '../../css/m/msqhepy4s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f-rt1kbiq"/><path class="msqhepy4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:delivery-robot-48"} {...others} />);
}

export default Component;
