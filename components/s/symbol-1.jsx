import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi36m5bee.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zi36m5bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:symbol-1"} {...others} />);
}

export default Component;
