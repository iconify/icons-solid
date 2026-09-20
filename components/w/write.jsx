import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edw-f3fjn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="edw-f3fjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:write"} {...others} />);
}

export default Component;
