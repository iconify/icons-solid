import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzea66lvs.css';
import '../../css/u/ujyghec7j.css';
import '../../css/e/ewlmhxmrx.css';
import '../../css/b/brjj83bkz.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="zzea66lvs"><rect class="ujyghec7j"/><path class="ewlmhxmrx"/><path class="brjj83bkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:lineweight"} {...others} />);
}

export default Component;
