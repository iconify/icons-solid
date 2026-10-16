import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9wztb3tr.css';
import '../../css/d/d3xoy3b4c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v9wztb3tr"/><path class="d3xoy3b4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vr-headset-20-bold"} {...others} />);
}

export default Component;
