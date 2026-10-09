import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxzfl5btn.css';
import '../../css/w/wsygfsbmd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lxzfl5btn"/><path class="wsygfsbmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clipboard-list-48"} {...others} />);
}

export default Component;
