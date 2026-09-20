import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j301gnb2g.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-4};
const content = `<path class="j301gnb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:rss-feed"} {...others} />);
}

export default Component;
