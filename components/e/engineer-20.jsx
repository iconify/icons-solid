import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du-l4391e.css';
import '../../css/q/qsxkqnwbg.css';
import '../../css/x/xoc82-0le.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="du-l4391e"/><path class="qsxkqnwbg"/><path class="xoc82-0le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:engineer-20"} {...others} />);
}

export default Component;
