import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmuj25bzq.css';
import '../../css/l/llcw5u27i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pmuj25bzq"/><path class="llcw5u27i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:apartment-20-bold"} {...others} />);
}

export default Component;
