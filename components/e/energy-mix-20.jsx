import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh2hmebrd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lh2hmebrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-mix-20"} {...others} />);
}

export default Component;
