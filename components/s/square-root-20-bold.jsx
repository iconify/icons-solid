import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3b-xrbit.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l3b-xrbit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:square-root-20-bold"} {...others} />);
}

export default Component;
