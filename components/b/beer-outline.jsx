import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5xxtl4yd.css';
import '../../css/n/nuhx_m9bs.css';
import '../../css/r/r1lz3zb-k.css';
import '../../css/g/gd5-xc8zc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t5xxtl4yd"/><path class="nuhx_m9bs"/><path class="r1lz3zb-k"/><path class="gd5-xc8zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:beer-outline"} {...others} />);
}

export default Component;
