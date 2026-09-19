import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsnjhj1vj.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="tsnjhj1vj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:user-doctor"} {...others} />);
}

export default Component;
