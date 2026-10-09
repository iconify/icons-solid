import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igsew81fb.css';
import '../../css/k/ki4_wwbbd.css';
import '../../css/e/eo_qvfbbf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="igsew81fb"/><path class="ki4_wwbbd"/><path class="eo_qvfbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:window-20-bold"} {...others} />);
}

export default Component;
