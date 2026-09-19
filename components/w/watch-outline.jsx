import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_9832jzs.css';
import '../../css/s/s5cgq7bny.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="d_9832jzs"/><path class="s5cgq7bny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:watch-outline"} {...others} />);
}

export default Component;
