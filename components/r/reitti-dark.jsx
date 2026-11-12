import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdt8x3_lk.css';
import '../../css/y/yurfh5b_h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kdt8x3_lk"/><path class="yurfh5b_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reitti-dark"} {...others} />);
}

export default Component;
