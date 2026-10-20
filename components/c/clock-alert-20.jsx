import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4g3nmxvh.css';
import '../../css/l/lkrm188_r.css';
import '../../css/o/omab5dbnu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j4g3nmxvh"/><path class="lkrm188_r"/><path class="omab5dbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clock-alert-20"} {...others} />);
}

export default Component;
