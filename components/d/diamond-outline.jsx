import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdf6hiznz.css';
import '../../css/v/vnfkbkbvd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zdf6hiznz"/><path class="vnfkbkbvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:diamond-outline"} {...others} />);
}

export default Component;
