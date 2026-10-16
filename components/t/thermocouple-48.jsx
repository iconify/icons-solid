import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_44j831n.css';
import '../../css/f/fjz8aybha.css';
import '../../css/m/mib1oqjfw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m_44j831n"/><path class="fjz8aybha"/><path class="mib1oqjfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermocouple-48"} {...others} />);
}

export default Component;
