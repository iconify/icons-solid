import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/weypos4si.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="weypos4si"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:triangular-pill-and-circular-pill-and-capsule-pill"} {...others} />);
}

export default Component;
