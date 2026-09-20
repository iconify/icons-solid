import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1lqv4b4w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k1lqv4b4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-touch-id-lock"} {...others} />);
}

export default Component;
