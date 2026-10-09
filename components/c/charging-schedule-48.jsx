import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/atysxlblu.css';
import '../../css/g/g3wujfbdd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="atysxlblu"/><path class="g3wujfbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-schedule-48"} {...others} />);
}

export default Component;
