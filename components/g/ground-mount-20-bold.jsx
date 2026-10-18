import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkqr1j59e.css';
import '../../css/g/gx519cbvi.css';
import '../../css/y/yv842m9yr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rkqr1j59e"/><path class="gx519cbvi"/><path class="yv842m9yr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-mount-20-bold"} {...others} />);
}

export default Component;
