import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx1df9t7l.css';
import '../../css/c/cjnhv0ssg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lx1df9t7l"/><path class="cjnhv0ssg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-video-plus"} {...others} />);
}

export default Component;
