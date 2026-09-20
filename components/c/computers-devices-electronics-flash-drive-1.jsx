import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvkoc9o6y.css';
import '../../css/k/kl1h-sbvh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vvkoc9o6y"/><path class="kl1h-sbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-flash-drive-1"} {...others} />);
}

export default Component;
