import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khd9gq-js.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="khd9gq-js"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-earpod-sound"} {...others} />);
}

export default Component;
