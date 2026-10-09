import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjpipuzmt.css';
import '../../css/g/g73cn62ui.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fjpipuzmt"/><path class="g73cn62ui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:doorbell-48"} {...others} />);
}

export default Component;
