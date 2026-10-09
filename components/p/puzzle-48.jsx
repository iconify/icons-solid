import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm-zvw_lm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qm-zvw_lm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:puzzle-48"} {...others} />);
}

export default Component;
