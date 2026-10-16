import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrn60viue.css';
import '../../css/f/fvyubxb-f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hrn60viue"/><path class="fvyubxb-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:junction-box-48-bold"} {...others} />);
}

export default Component;
