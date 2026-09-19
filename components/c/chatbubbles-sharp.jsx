import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugoumwb4c.css';
import '../../css/c/cfmtxnb5o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ugoumwb4c"/><path class="cfmtxnb5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:chatbubbles-sharp"} {...others} />);
}

export default Component;
