import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi_la0bqj.css';
import '../../css/v/vf3vx-b1v.css';
import '../../css/a/a1xbh8u7c.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vi_la0bqj"/><path class="vf3vx-b1v"/><path class="a1xbh8u7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:email-unread"} {...others} />);
}

export default Component;
