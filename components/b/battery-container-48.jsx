import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl2z74b1y.css';
import '../../css/l/lv3t6tmyd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gl2z74b1y"/><path class="lv3t6tmyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-container-48"} {...others} />);
}

export default Component;
