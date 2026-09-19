import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rywc8nbcc.css';
import '../../css/m/mh7spwbcm.css';
import '../../css/l/lzxnqd56o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rywc8nbcc"/><circle class="mh7spwbcm"/><circle class="lzxnqd56o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:heavydivisionsign"} {...others} />);
}

export default Component;
