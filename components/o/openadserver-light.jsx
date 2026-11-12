import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_9rqpxcs.css';
import '../../css/b/bm9ngmkam.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_9rqpxcs"/><path class="bm9ngmkam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openadserver-light"} {...others} />);
}

export default Component;
