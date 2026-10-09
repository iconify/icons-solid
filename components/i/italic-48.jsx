import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwlek8bjm.css';
import '../../css/o/onp3hbbtd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jwlek8bjm"/><path class="onp3hbbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:italic-48"} {...others} />);
}

export default Component;
