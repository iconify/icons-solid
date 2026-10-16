import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql7wfvbqt.css';
import '../../css/v/vv3xjkaxa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ql7wfvbqt"/><path class="vv3xjkaxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:axe-48-bold"} {...others} />);
}

export default Component;
