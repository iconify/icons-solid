import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h4xle3ybm.css';
import '../../css/s/sxbuhbv5x.css';
import '../../css/p/p9w24jbuo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="h4xle3ybm"/><path class="sxbuhbv5x wm-a"/><path class="p9w24jbuo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:party-popper-solid"} {...others} />);
}

export default Component;
