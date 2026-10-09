import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yzmkpsb2f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yzmkpsb2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:underfloor-heating-20"} {...others} />);
}

export default Component;
