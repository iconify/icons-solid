import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n58zy-blk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n58zy-blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:hospital-symbol"} {...others} />);
}

export default Component;
