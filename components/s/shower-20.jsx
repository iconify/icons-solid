import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrqyz4i2u.css';
import '../../css/n/nx_frvvuj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xrqyz4i2u"/><path class="nx_frvvuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shower-20"} {...others} />);
}

export default Component;
