import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8i89z5nr.css';
import '../../css/s/sirrsrb_i.css';
import '../../css/z/zkyjh5bzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e8i89z5nr"/><path class="sirrsrb_i"/><path class="zkyjh5bzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-off-linear"} {...others} />);
}

export default Component;
