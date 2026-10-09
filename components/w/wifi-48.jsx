import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s31pbgi7y.css';
import '../../css/m/mxan4gp1r.css';
import '../../css/v/vp9gn9sho.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s31pbgi7y"/><path class="mxan4gp1r"/><path class="vp9gn9sho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wifi-48"} {...others} />);
}

export default Component;
