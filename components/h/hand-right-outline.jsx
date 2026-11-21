import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jnjtaqb5l.css';
import '../../css/z/zogbbpbrk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jnjtaqb5l"/><path class="zogbbpbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:hand-right-outline"} {...others} />);
}

export default Component;
