import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue6q9sbkc.css';
import '../../css/d/d27n8y_ge.css';
import '../../css/r/rqt1aybfd.css';
import '../../css/l/l74sf0b6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ue6q9sbkc"/><path class="d27n8y_ge"/><path class="rqt1aybfd"/><path class="l74sf0b6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-cross-bold-duotone"} {...others} />);
}

export default Component;
