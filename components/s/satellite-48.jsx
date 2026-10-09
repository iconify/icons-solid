import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le28xpbbv.css';
import '../../css/o/o8rtphxyj.css';
import '../../css/c/czocnxqcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="le28xpbbv"/><path class="o8rtphxyj"/><path class="czocnxqcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:satellite-48"} {...others} />);
}

export default Component;
