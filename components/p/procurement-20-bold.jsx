import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix679zbux.css';
import '../../css/l/lh-bp5b_i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ix679zbux"/><path class="lh-bp5b_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:procurement-20-bold"} {...others} />);
}

export default Component;
