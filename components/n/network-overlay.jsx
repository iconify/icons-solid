import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k37wizbef.css';
import '../../css/o/otjvghwvk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k37wizbef"/><path class="otjvghwvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:network-overlay"} {...others} />);
}

export default Component;
