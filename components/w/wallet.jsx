import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8vkeubrv.css';
import '../../css/k/k18o02rhp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q8vkeubrv"/><path class="k18o02rhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:wallet"} {...others} />);
}

export default Component;
