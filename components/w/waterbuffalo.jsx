import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu6fmmbhh.css';
import '../../css/n/nij7g-byp.css';
import '../../css/b/b538osbcz.css';
import '../../css/b/b6mgyu3-v.css';
import '../../css/c/ccife_b9p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tu6fmmbhh"/><path class="nij7g-byp"/><path class="b538osbcz"/><path class="b6mgyu3-v"/><path class="ccife_b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:waterbuffalo"} {...others} />);
}

export default Component;
