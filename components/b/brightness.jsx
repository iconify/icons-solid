import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yb3beig_b.css';
import '../../css/w/w9ouczb4n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yb3beig_b"/><path class="w9ouczb4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:brightness"} {...others} />);
}

export default Component;
