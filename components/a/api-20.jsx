import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq3i9_lhj.css';
import '../../css/y/ydkyucbmf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lq3i9_lhj"/><path class="ydkyucbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:api-20"} {...others} />);
}

export default Component;
