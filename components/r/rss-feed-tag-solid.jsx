import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8yhflb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d8yhflb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:rss-feed-tag-solid"} {...others} />);
}

export default Component;
