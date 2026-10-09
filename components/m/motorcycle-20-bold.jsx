import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp7dtzbce.css';
import '../../css/e/eun1wlb2w.css';
import '../../css/e/e15-uu0qm.css';
import '../../css/p/pwulb-bev.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pp7dtzbce"/><path class="eun1wlb2w"/><path class="e15-uu0qm"/><path class="pwulb-bev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motorcycle-20-bold"} {...others} />);
}

export default Component;
