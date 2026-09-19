import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckhg4cclh.css';
import '../../css/l/l6od3hn3u.css';

const viewBox = {"width":465,"height":512};
const content = `<path class="ckhg4cclh"/><path class="l6od3hn3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:finder"} {...others} />);
}

export default Component;
