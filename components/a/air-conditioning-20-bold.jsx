import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vb32smlnz.css';
import '../../css/t/tznykc51m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vb32smlnz"/><path class="tznykc51m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-conditioning-20-bold"} {...others} />);
}

export default Component;
