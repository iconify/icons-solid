import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1vqxhqob.css';
import '../../css/c/c07srb4ol.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f1vqxhqob"/><path class="c07srb4ol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pine-tree-48-bold"} {...others} />);
}

export default Component;
