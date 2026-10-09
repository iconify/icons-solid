import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt37rybne.css';
import '../../css/t/tpzkgwbum.css';
import '../../css/v/vargdwkro.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vt37rybne"/><path class="tpzkgwbum"/><path class="vargdwkro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mine-shaft-48-bold"} {...others} />);
}

export default Component;
