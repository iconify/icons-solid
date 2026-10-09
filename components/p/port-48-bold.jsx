import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oolum954d.css';
import '../../css/n/nbgn9e5js.css';
import '../../css/z/zdve79nyr.css';
import '../../css/p/pc7o7n93n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oolum954d"/><path class="nbgn9e5js"/><path class="zdve79nyr"/><path class="pc7o7n93n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:port-48-bold"} {...others} />);
}

export default Component;
