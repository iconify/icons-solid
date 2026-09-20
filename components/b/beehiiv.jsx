import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi7yq_h3v.css';

const viewBox = {"width":1544,"height":1456};
const content = `<path class="fi7yq_h3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:beehiiv"} {...others} />);
}

export default Component;
