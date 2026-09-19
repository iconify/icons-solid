import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3zxnib7j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k3zxnib7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bot-sparkle-stroke-16"} {...others} />);
}

export default Component;
