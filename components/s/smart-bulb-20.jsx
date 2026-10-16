import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewk2or1yh.css';
import '../../css/v/vuc2o48vf.css';
import '../../css/u/uofloxbgp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ewk2or1yh"/><path class="vuc2o48vf"/><path class="uofloxbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-bulb-20"} {...others} />);
}

export default Component;
