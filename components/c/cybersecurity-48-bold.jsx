import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4447fbqf.css';
import '../../css/k/kog434b-z.css';
import '../../css/t/txwpp5b_c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w4447fbqf"/><path class="kog434b-z"/><path class="txwpp5b_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cybersecurity-48-bold"} {...others} />);
}

export default Component;
