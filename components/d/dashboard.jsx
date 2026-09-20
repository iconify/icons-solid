import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue-cr-o1h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ue-cr-o1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:dashboard"} {...others} />);
}

export default Component;
