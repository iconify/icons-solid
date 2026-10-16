import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is2wtacnu.css';
import '../../css/w/wqs95_b4l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="is2wtacnu"/><path class="wqs95_b4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-pie-slice-20-bold"} {...others} />);
}

export default Component;
