import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oruybqb1x.css';
import '../../css/z/z4r98tbta.css';
import '../../css/z/z88o7-bai.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oruybqb1x"/><path class="z4r98tbta"/><path class="z88o7-bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mountain-river-20"} {...others} />);
}

export default Component;
