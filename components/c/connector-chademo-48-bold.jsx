import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q668lybvz.css';
import '../../css/m/mmf760o5u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q668lybvz"/><path class="mmf760o5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-chademo-48-bold"} {...others} />);
}

export default Component;
