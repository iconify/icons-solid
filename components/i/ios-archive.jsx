import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzlocfotl.css';
import '../../css/k/kx9-9-b3f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uzlocfotl"/><path class="kx9-9-b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-archive"} {...others} />);
}

export default Component;
