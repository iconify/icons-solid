import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9fygebyi.css';
import '../../css/p/pw602pb9o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e9fygebyi"/><path class="pw602pb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-cell-20-bold"} {...others} />);
}

export default Component;
