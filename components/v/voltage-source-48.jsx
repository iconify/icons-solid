import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw3x_bcqz.css';
import '../../css/y/ywzq7itsb.css';
import '../../css/w/wz0-7abar.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lw3x_bcqz"/><path class="ywzq7itsb"/><path class="wz0-7abar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-source-48"} {...others} />);
}

export default Component;
