import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2mjsubix.css';
import '../../css/u/ub9hmvbkh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h2mjsubix"/><path class="ub9hmvbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-flammable-48-bold"} {...others} />);
}

export default Component;
