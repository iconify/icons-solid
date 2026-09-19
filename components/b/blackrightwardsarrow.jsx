import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub82tgj1c.css';
import '../../css/e/espyn4ruh.css';
import '../../css/i/iw0h-09hc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ub82tgj1c"/><path class="espyn4ruh"/><path class="iw0h-09hc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackrightwardsarrow"} {...others} />);
}

export default Component;
