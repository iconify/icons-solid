import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3-x1t1gm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="i3-x1t1gm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:funnel-crossed-16"} {...others} />);
}

export default Component;
