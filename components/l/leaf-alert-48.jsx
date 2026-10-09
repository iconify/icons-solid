import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/viu8vyokx.css';
import '../../css/j/jyz_jvb2h.css';
import '../../css/u/ugl4outhm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="viu8vyokx"/><path class="jyz_jvb2h"/><path class="ugl4outhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-alert-48"} {...others} />);
}

export default Component;
