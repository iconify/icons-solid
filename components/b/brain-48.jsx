import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl0-fwb4k.css';
import '../../css/o/oxs1yxfms.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gl0-fwb4k"/><path class="oxs1yxfms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brain-48"} {...others} />);
}

export default Component;
