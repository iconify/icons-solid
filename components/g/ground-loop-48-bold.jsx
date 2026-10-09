import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbgn9e5js.css';
import '../../css/t/tjum5_rgf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nbgn9e5js"/><path class="tjum5_rgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-loop-48-bold"} {...others} />);
}

export default Component;
