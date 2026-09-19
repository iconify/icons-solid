import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt57vq-0m.css';
import '../../css/z/zlx_zlb4h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wt57vq-0m"/><path class="zlx_zlb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:battery-full-sharp"} {...others} />);
}

export default Component;
