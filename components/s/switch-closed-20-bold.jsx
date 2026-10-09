import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi9uwcchg.css';
import '../../css/k/kz2_3wbrk.css';
import '../../css/k/kn3-ey60h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zi9uwcchg"/><path class="kz2_3wbrk"/><path class="kn3-ey60h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:switch-closed-20-bold"} {...others} />);
}

export default Component;
