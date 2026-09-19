import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2kcvmbtw.css';
import '../../css/x/xnsfeobti.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r2kcvmbtw"/><path class="xnsfeobti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackdroplet"} {...others} />);
}

export default Component;
