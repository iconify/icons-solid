import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnucjk.css';
import '../../css/x/xwdvrd.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wnucjk"/><path class="xwdvrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-round"} {...others} />);
}

export default Component;
