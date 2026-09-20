import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry68nbwkv.css';
import '../../css/b/b09d1x-lb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ry68nbwkv"/><path class="b09d1x-lb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:print-solid"} {...others} />);
}

export default Component;
