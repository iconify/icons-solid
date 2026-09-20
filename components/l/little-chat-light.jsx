import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k08wnob5f.css';
import '../../css/w/wyv77qbzm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k08wnob5f"/><path class="wyv77qbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:little-chat-light"} {...others} />);
}

export default Component;
