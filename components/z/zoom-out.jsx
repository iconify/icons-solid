import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t679gsbtj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="t679gsbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:zoom-out"} {...others} />);
}

export default Component;
