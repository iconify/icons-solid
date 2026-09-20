import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0im_gbxt.css';
import '../../css/n/n7miu-b0l.css';
import '../../css/f/fahhi3b_v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v0im_gbxt"/><path class="n7miu-b0l"/><path class="fahhi3b_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:snapchat"} {...others} />);
}

export default Component;
