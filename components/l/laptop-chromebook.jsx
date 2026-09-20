import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl6gpt-oa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wl6gpt-oa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:laptop-chromebook"} {...others} />);
}

export default Component;
