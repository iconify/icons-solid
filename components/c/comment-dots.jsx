import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dpdlfs5oy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dpdlfs5oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:comment-dots"} {...others} />);
}

export default Component;
