import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5i-ymejz.css';
import '../../css/x/xv-3bjb_h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i5i-ymejz"/><path class="xv-3bjb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotor-48"} {...others} />);
}

export default Component;
