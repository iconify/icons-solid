import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyrurpboo.css';
import '../../css/a/a3afzd8xy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dyrurpboo"/><path class="a3afzd8xy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-question-48"} {...others} />);
}

export default Component;
