import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfgle7bjr.css';
import '../../css/v/v8-70c-7i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wfgle7bjr"/><path class="v8-70c-7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vertical-axis-turbine-20"} {...others} />);
}

export default Component;
