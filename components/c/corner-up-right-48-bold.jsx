import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2hr5sbai.css';
import '../../css/y/yvjkteb0g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y2hr5sbai"/><path class="yvjkteb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-up-right-48-bold"} {...others} />);
}

export default Component;
