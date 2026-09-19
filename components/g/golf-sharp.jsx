import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ioq_pnb1t.css';
import '../../css/x/xde3kv5ou.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ioq_pnb1t"/><path class="xde3kv5ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:golf-sharp"} {...others} />);
}

export default Component;
