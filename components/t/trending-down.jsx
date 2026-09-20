import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb3-mo94e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bb3-mo94e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:trending-down"} {...others} />);
}

export default Component;
