import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz418kbmm.css';
import '../../css/t/tozovebkm.css';
import '../../css/w/wak66kbhs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fz418kbmm"/><path class="tozovebkm"/><path class="wak66kbhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:crocodile"} {...others} />);
}

export default Component;
