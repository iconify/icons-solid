import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh3xhwb0f.css';
import '../../css/g/gfokxvboe.css';
import '../../css/m/m42n8zsrd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uh3xhwb0f"/><path class="gfokxvboe"/><path class="m42n8zsrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:penstock-20"} {...others} />);
}

export default Component;
