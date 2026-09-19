import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wic4l3bna.css';
import '../../css/j/j2rwd5epq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wic4l3bna"/><path class="j2rwd5epq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:sync-outline"} {...others} />);
}

export default Component;
