import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/il-4v9blf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="il-4v9blf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:head-thinking-outline"} {...others} />);
}

export default Component;
