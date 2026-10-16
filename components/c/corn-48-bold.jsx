import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yexrm9bgt.css';
import '../../css/b/bi3yz8b9a.css';
import '../../css/v/v964ge3ni.css';
import '../../css/h/htwye9bzz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yexrm9bgt"/><path class="bi3yz8b9a"/><path class="v964ge3ni"/><path class="htwye9bzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corn-48-bold"} {...others} />);
}

export default Component;
