import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfk6c0bde.css';
import '../../css/a/alm7xj5_d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kfk6c0bde"/><path class="alm7xj5_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brine-pond-48-bold"} {...others} />);
}

export default Component;
