import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly6yqgv8r.css';
import '../../css/i/iebf4fbnh.css';
import '../../css/c/cp_vdbbue.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ly6yqgv8r"/><path class="iebf4fbnh"/><path class="cp_vdbbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-48-bold"} {...others} />);
}

export default Component;
