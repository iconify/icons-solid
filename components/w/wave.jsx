import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln87rknis.css';
import '../../css/c/ceswd_37u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ln87rknis"/><path class="ceswd_37u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:wave"} {...others} />);
}

export default Component;
