import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb_ogzbcc.css';

const viewBox = {"width":1026,"height":1027};
const content = `<path class="fb_ogzbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:alertpay"} {...others} />);
}

export default Component;
