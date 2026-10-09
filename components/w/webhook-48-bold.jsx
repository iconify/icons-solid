import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxuzv3bfk.css';
import '../../css/o/oscggibnn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sxuzv3bfk"/><path class="oscggibnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:webhook-48-bold"} {...others} />);
}

export default Component;
