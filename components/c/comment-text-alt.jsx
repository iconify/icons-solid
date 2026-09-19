import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7ktuhjxu.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="x7ktuhjxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:comment-text-alt"} {...others} />);
}

export default Component;
