import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb9x9-c_l.css';
import '../../css/r/rfebmmxan.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mb9x9-c_l"/><path class="rfebmmxan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-heart-48"} {...others} />);
}

export default Component;
