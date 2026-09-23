import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc_9f5b_w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hc_9f5b_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:aiometadata-light"} {...others} />);
}

export default Component;
