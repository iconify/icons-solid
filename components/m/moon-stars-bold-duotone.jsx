import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0zs09fb.css';
import '../../css/o/obzdjpx-v.css';
import '../../css/b/bbi4wky7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="to0zs09fb"/><path class="obzdjpx-v"/><path class="bbi4wky7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-stars-bold-duotone"} {...others} />);
}

export default Component;
