import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4b3u2b6s.css';

const viewBox = {"width":1216,"height":1792};
const content = `<path class="y4b3u2b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:tencent-weibo"} {...others} />);
}

export default Component;
