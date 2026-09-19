import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb8ysxktc.css';
import '../../css/r/r6esm02yb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lb8ysxktc"/><path class="r6esm02yb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-open"} {...others} />);
}

export default Component;
