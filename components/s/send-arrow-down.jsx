import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sbhdo_yum.css';
import '../../css/w/wi3k8x65i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="sbhdo_yum"/><path class="wi3k8x65i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:send-arrow-down"} {...others} />);
}

export default Component;
