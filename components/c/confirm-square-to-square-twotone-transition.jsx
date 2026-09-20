import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/y/y591zt.css';
import '../../css/y/yp2axg.css';
import '../../css/f/fill-from-0.css';
import '../../css/s/so-to-14.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew y591zt"/><path class="iw1iew yp2axg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:confirm-square-to-square-twotone-transition"} {...others} />);
}

export default Component;
