import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn1dkmnqu.css';
import '../../css/t/th0-odbhe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mn1dkmnqu"/><path class="th0-odbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:axe-20-bold"} {...others} />);
}

export default Component;
