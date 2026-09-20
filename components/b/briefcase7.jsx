import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/l/lwenppemr.css';
import '../../css/b/bnct77q7n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="lwenppemr"/><path class="bnct77q7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:briefcase7"} {...others} />);
}

export default Component;
