import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxvrb1ymn.css';
import '../../css/v/vy85ju8br.css';
import '../../css/e/ejsl5db7o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sxvrb1ymn"/><path class="vy85ju8br"/><path class="ejsl5db7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:time-of-use-20"} {...others} />);
}

export default Component;
