import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfchu_-gh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rfchu_-gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flow-connection"} {...others} />);
}

export default Component;
