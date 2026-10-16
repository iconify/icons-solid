import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqvv3bb7y.css';
import '../../css/t/ti-bis8gw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kqvv3bb7y"/><path class="ti-bis8gw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:door-20"} {...others} />);
}

export default Component;
