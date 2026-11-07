import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy2kejbyw.css';
import '../../css/j/j-36nlbdh.css';
import '../../css/h/hxvqwbbdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iy2kejbyw"/><path class="j-36nlbdh"/><path class="hxvqwbbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:laptop-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
