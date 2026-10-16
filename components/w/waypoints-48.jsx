import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kws3gabmt.css';
import '../../css/h/hjb9uvnoq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kws3gabmt"/><path class="hjb9uvnoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:waypoints-48"} {...others} />);
}

export default Component;
