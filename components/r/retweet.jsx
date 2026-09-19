import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2bw7kbqw.css';

const viewBox = {"width":1360,"height":1000};
const content = `<path class="l2bw7kbqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"websymbol:retweet"} {...others} />);
}

export default Component;
