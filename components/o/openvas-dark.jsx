import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1mxp-b2u.css';
import '../../css/j/jw8pkbh0s.css';
import '../../css/w/wn29amz4h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f1mxp-b2u"/><path class="jw8pkbh0s"/><path class="wn29amz4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openvas-dark"} {...others} />);
}

export default Component;
