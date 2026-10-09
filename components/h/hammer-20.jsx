import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7a1zgbqk.css';
import '../../css/d/d_mc1ovfv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e7a1zgbqk"/><path class="d_mc1ovfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hammer-20"} {...others} />);
}

export default Component;
