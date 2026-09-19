import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcr6e9rss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pcr6e9rss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:horiz-distribution-right"} {...others} />);
}

export default Component;
