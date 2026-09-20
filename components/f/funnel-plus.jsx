import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udvx3qmvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udvx3qmvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:funnel-plus"} {...others} />);
}

export default Component;
