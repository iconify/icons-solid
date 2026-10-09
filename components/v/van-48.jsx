import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp02g-bms.css';
import '../../css/r/roowebboo.css';
import '../../css/r/rviy4nhfj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fp02g-bms"/><path class="roowebboo"/><path class="rviy4nhfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:van-48"} {...others} />);
}

export default Component;
