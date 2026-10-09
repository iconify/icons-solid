import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h672n2bmz.css';
import '../../css/y/ysryh6dqp.css';
import '../../css/a/ax9-5db1r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h672n2bmz"/><path class="ysryh6dqp"/><path class="ax9-5db1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:elderly-20-bold"} {...others} />);
}

export default Component;
