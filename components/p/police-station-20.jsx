import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev4nrv7df.css';
import '../../css/d/dfad6bbbt.css';
import '../../css/a/axuha0b4s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ev4nrv7df"/><path class="dfad6bbbt"/><path class="axuha0b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:police-station-20"} {...others} />);
}

export default Component;
