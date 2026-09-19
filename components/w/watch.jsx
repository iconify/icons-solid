import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krn9eiidq.css';
import '../../css/y/ypuxzcc_r.css';
import '../../css/e/e2_x5zb1o.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="krn9eiidq"/><path class="ypuxzcc_r"/><path class="e2_x5zb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:watch"} {...others} />);
}

export default Component;
