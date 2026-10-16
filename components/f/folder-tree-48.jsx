import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1p_9z-6l.css';
import '../../css/z/z3rbxgblu.css';
import '../../css/j/j80farb4m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="h1p_9z-6l"/><path class="z3rbxgblu"/><path class="j80farb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-tree-48"} {...others} />);
}

export default Component;
