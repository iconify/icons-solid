import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-nvxs2oj.css';
import '../../css/v/v7l69tbtr.css';
import '../../css/k/ka-asdb9s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i-nvxs2oj"/><path class="v7l69tbtr"/><path class="ka-asdb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tow-truck-20"} {...others} />);
}

export default Component;
