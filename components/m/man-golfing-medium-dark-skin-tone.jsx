import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eztqw9biy.css';
import '../../css/l/ltv65kn9y.css';
import '../../css/b/b-g-ugb8y.css';
import '../../css/b/b8vre53kw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/l/l_ulzsdje.css';
import '../../css/l/lu2x-n83s.css';
import '../../css/z/zezq_hbne.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="eztqw9biy"><circle class="ltv65kn9y"/><path class="b-g-ugb8y"/><path class="b8vre53kw"/></g><g class="brzn_0bpr"><path class="l_ulzsdje"/><circle class="lu2x-n83s"/><path class="zezq_hbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-golfing-medium-dark-skin-tone"} {...others} />);
}

export default Component;
