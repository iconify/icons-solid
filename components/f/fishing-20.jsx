import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxgw5_bly.css';
import '../../css/f/f1to3eutu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gxgw5_bly"/><path class="f1to3eutu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fishing-20"} {...others} />);
}

export default Component;
