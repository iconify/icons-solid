import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f--7-bb_s.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="f--7-bb_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:funnel-dollar"} {...others} />);
}

export default Component;
