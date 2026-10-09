import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncjlt0bzz.css';
import '../../css/r/rvuq3ibhd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ncjlt0bzz"/><path class="rvuq3ibhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dollar-20"} {...others} />);
}

export default Component;
