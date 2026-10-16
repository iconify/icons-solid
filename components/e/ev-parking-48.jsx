import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5i9cpbbm.css';
import '../../css/k/k1a5ibk1n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x5i9cpbbm"/><path class="k1a5ibk1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-parking-48"} {...others} />);
}

export default Component;
