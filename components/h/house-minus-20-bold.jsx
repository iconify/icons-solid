import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i66_yd2fa.css';
import '../../css/o/o-bsg_b-e.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i66_yd2fa"/><path class="o-bsg_b-e"/><path class="hayl1lfmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-minus-20-bold"} {...others} />);
}

export default Component;
