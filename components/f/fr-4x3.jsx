import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmyfv_bvg.css';
import '../../css/o/o9ffdfb9u.css';
import '../../css/w/wgqpd53tm.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="vmyfv_bvg"/><path class="o9ffdfb9u"/><path class="wgqpd53tm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:fr-4x3"} {...others} />);
}

export default Component;
