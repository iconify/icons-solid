import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg3h39b1g.css';
import '../../css/a/ah-ntwbee.css';
import '../../css/z/zi1nuachi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eg3h39b1g"/><path class="ah-ntwbee"/><path class="zi1nuachi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-lock-48"} {...others} />);
}

export default Component;
