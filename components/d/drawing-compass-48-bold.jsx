import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py5hh0bxr.css';
import '../../css/c/cu1d12b6p.css';
import '../../css/d/d5sbbcb9x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="py5hh0bxr"/><path class="cu1d12b6p"/><path class="d5sbbcb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drawing-compass-48-bold"} {...others} />);
}

export default Component;
