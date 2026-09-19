import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e54nb2b2x.css';
import '../../css/w/wjaysjb-c.css';
import '../../css/x/xjsfynbtp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e54nb2b2x"/><path class="wjaysjb-c"/><path transform="matrix(.86021 0 0 .96774 -50 10)" class="xjsfynbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:aq-1x1"} {...others} />);
}

export default Component;
