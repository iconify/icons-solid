import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwss-ebkl.css';
import '../../css/b/bd5wmoffp.css';
import '../../css/q/qdq3nabuw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rwss-ebkl"/><path class="bd5wmoffp"/><path class="qdq3nabuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:collision"} {...others} />);
}

export default Component;
