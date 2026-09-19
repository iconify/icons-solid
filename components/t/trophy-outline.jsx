import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/viq1-by_c.css';
import '../../css/n/nskm8xyiy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="viq1-by_c"/><path class="nskm8xyiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:trophy-outline"} {...others} />);
}

export default Component;
