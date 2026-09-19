import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9gk6b6yh.css';
import '../../css/v/vfp8vn0fx.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="g9gk6b6yh"/><path class="vfp8vn0fx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-whatsapp-outline"} {...others} />);
}

export default Component;
