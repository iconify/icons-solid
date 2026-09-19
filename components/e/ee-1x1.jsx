import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wdia6fa5z.css';
import '../../css/q/q2l4humxv.css';
import '../../css/m/me0wbo9yd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wdia6fa5z"/><path class="q2l4humxv"/><path class="me0wbo9yd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ee-1x1"} {...others} />);
}

export default Component;
