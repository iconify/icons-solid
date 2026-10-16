import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu9cx5bea.css';
import '../../css/c/cnom9xbgm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vu9cx5bea"/><path class="cnom9xbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sparkline-48"} {...others} />);
}

export default Component;
