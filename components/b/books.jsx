import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5hs5qbej.css';
import '../../css/x/xl_i265-u.css';
import '../../css/d/d42sx8bgr.css';

const viewBox = {"width":18,"height":16};
const content = `<path class="z5hs5qbej"/><path class="xl_i265-u"/><path class="d42sx8bgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:books"} {...others} />);
}

export default Component;
