import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb9x9-c_l.css';
import '../../css/j/jp5w86lrq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mb9x9-c_l"/><path class="jp5w86lrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-minus-48"} {...others} />);
}

export default Component;
