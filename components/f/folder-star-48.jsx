import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb9x9-c_l.css';
import '../../css/x/xv2q6jbej.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mb9x9-c_l"/><path class="xv2q6jbej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-star-48"} {...others} />);
}

export default Component;
