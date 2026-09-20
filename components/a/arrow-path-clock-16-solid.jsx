import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv_vv6bcm.css';
import '../../css/r/r_8zsvb4v.css';
import '../../css/n/ncs7ab22i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="nv_vv6bcm"><path class="r_8zsvb4v"/><path class="ncs7ab22i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:arrow-path-clock-16-solid"} {...others} />);
}

export default Component;
