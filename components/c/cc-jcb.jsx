import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja3dp1woh.css';

const viewBox = {"width":2304,"height":1536};
const content = `<path class="ja3dp1woh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:cc-jcb"} {...others} />);
}

export default Component;
