import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp2u-9b8d.css';
import '../../css/j/jznb33btn.css';
import '../../css/v/v30al6b2c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kp2u-9b8d"/><path class="jznb33btn"/><path class="v30al6b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cube-48"} {...others} />);
}

export default Component;
