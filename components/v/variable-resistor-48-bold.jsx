import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9514n9ut.css';
import '../../css/x/xdk69eb9j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h9514n9ut"/><path class="xdk69eb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:variable-resistor-48-bold"} {...others} />);
}

export default Component;
