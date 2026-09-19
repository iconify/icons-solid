import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibe_u-t6g.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="ibe_u-t6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:comment-outline"} {...others} />);
}

export default Component;
