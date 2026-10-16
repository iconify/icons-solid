import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp02g-bms.css';
import '../../css/t/t_7qy9b-e.css';
import '../../css/r/rviy4nhfj.css';
import '../../css/a/a9jgigbhm.css';
import '../../css/s/sttuocbmy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fp02g-bms"/><path class="t_7qy9b-e"/><path class="rviy4nhfj"/><path class="a9jgigbhm"/><path class="sttuocbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:minibus-48"} {...others} />);
}

export default Component;
