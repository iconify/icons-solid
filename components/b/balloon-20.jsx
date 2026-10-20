import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mr413t_mq.css';
import '../../css/b/bccw67g_w.css';
import '../../css/c/c0qc5jl9q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mr413t_mq"/><path class="bccw67g_w"/><path class="c0qc5jl9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:balloon-20"} {...others} />);
}

export default Component;
