import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhh5q_bxg.css';
import '../../css/i/il5efkf8u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uhh5q_bxg"/><path class="il5efkf8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:control-panel-48"} {...others} />);
}

export default Component;
