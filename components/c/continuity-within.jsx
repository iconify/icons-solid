import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv_9n7-1w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xv_9n7-1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:continuity-within"} {...others} />);
}

export default Component;
