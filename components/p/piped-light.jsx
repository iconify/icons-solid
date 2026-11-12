import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p75du9kle.css';
import '../../css/f/f08bsp95i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p75du9kle"/><path class="f08bsp95i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:piped-light"} {...others} />);
}

export default Component;
