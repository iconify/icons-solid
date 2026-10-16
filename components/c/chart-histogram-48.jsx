import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utf77lbef.css';
import '../../css/p/p5z3zvw9z.css';
import '../../css/f/fxqefbc9h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="utf77lbef"/><path class="p5z3zvw9z"/><path class="fxqefbc9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-histogram-48"} {...others} />);
}

export default Component;
