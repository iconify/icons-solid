import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1rwt2vuq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p1rwt2vuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:wine-bottle"} {...others} />);
}

export default Component;
