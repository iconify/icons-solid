import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eiaeqebxr.css';
import '../../css/p/p8psecw5g.css';
import '../../css/e/eul6t1bqe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eiaeqebxr"/><path class="p8psecw5g"/><path class="eul6t1bqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shrink-20"} {...others} />);
}

export default Component;
