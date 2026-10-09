import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emd2oxpxc.css';
import '../../css/x/xtzb6uzhb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="emd2oxpxc"/><path class="xtzb6uzhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:capacitor-20-bold"} {...others} />);
}

export default Component;
