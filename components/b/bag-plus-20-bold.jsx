import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg1pd4bom.css';
import '../../css/o/o9u2ibbix.css';
import '../../css/l/llirq21ot.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kg1pd4bom"/><path class="o9u2ibbix"/><path class="llirq21ot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bag-plus-20-bold"} {...others} />);
}

export default Component;
