import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tyyebzbnj.css';
import '../../css/j/jv0n_0n6m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tyyebzbnj"/><path class="jv0n_0n6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-waterfall-48"} {...others} />);
}

export default Component;
