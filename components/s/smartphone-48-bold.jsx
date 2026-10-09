import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw0sv1b2p.css';
import '../../css/o/ofyhu63mo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iw0sv1b2p"/><path class="ofyhu63mo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smartphone-48-bold"} {...others} />);
}

export default Component;
