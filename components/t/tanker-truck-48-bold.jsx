import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz3__6bfa.css';
import '../../css/a/af-u6v27p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fz3__6bfa"/><path class="af-u6v27p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tanker-truck-48-bold"} {...others} />);
}

export default Component;
