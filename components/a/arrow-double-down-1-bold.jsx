import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2eijs4lq.css';
import '../../css/d/dfeserbvh.css';
import '../../css/z/zg0xv8bfh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g2eijs4lq"/><path class="dfeserbvh"/><path class="zg0xv8bfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:arrow-double-down-1-bold"} {...others} />);
}

export default Component;
