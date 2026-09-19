import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugv82mm9o.css';

const viewBox = {"width":616.059,"height":1000};
const content = `<path class="ugv82mm9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:tumblr"} {...others} />);
}

export default Component;
