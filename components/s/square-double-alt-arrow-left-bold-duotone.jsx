import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg928d-qd.css';
import '../../css/a/a8qzt_a5q.css';
import '../../css/d/dkxc4fbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg928d-qd"/><path class="a8qzt_a5q"/><path class="dkxc4fbsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-double-alt-arrow-left-bold-duotone"} {...others} />);
}

export default Component;
