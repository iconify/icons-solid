import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8r44id8f.css';
import '../../css/n/n-7_zw30i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u8r44id8f"/><path class="n-7_zw30i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-waterfall-20-bold"} {...others} />);
}

export default Component;
