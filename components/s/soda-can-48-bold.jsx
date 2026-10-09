import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj2y_bb9h.css';
import '../../css/u/u01yqubev.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tj2y_bb9h"/><path class="u01yqubev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soda-can-48-bold"} {...others} />);
}

export default Component;
