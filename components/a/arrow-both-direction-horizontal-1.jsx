import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ychnccbmn.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="ychnccbmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:arrow-both-direction-horizontal-1"} {...others} />);
}

export default Component;
