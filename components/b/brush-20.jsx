import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t22ym13gb.css';
import '../../css/q/q7uz6xnzz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t22ym13gb"/><path class="q7uz6xnzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brush-20"} {...others} />);
}

export default Component;
