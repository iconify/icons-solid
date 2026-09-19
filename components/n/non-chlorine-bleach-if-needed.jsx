import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4xvk2bhh.css';

const viewBox = {"width":480,"height":448};
const content = `<path class="j4xvk2bhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:non-chlorine-bleach-if-needed"} {...others} />);
}

export default Component;
