import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqz3u-bid.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="qqz3u-bid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:square-root-alt"} {...others} />);
}

export default Component;
