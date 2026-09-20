import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv61dmbjf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xv61dmbjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:vr-headset-outline"} {...others} />);
}

export default Component;
