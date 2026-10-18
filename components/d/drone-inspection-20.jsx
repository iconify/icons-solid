import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r24r7qt7r.css';
import '../../css/x/xuu2b7bwb.css';
import '../../css/c/ct_c29f3k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r24r7qt7r"/><path class="xuu2b7bwb"/><path class="ct_c29f3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drone-inspection-20"} {...others} />);
}

export default Component;
