import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9lp8vb8r.css';
import '../../css/g/gezdqco1x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l9lp8vb8r"/><path class="gezdqco1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-pricetags-outline"} {...others} />);
}

export default Component;
