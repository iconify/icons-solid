import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rthtgrrbd.css';
import '../../css/y/y-pv_ev0y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rthtgrrbd"/><path class="y-pv_ev0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:image-sparkle-48"} {...others} />);
}

export default Component;
