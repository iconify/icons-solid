import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz30y8b3r.css';
import '../../css/f/faweyo8dm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dz30y8b3r"/><path class="faweyo8dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-20"} {...others} />);
}

export default Component;
