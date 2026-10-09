import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pect2h6nx.css';
import '../../css/e/ejop8g90f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pect2h6nx"/><path class="ejop8g90f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-48"} {...others} />);
}

export default Component;
