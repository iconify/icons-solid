import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/l/ltv65kn9y.css';
import '../../css/b/b-g-ugb8y.css';
import '../../css/b/b8vre53kw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/u/u7wkdm68l.css';
import '../../css/l/lu2x-n83s.css';
import '../../css/y/yqjt9rbek.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><circle class="ltv65kn9y"/><path class="b-g-ugb8y"/><path class="b8vre53kw"/></g><g class="brzn_0bpr"><path class="u7wkdm68l"/><circle class="lu2x-n83s"/><path class="yqjt9rbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-golfing"} {...others} />);
}

export default Component;
