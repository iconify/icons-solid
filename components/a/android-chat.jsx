import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2lktqd8u.css';
import '../../css/e/ejs_3u14j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g2lktqd8u"/><path class="ejs_3u14j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-chat"} {...others} />);
}

export default Component;
