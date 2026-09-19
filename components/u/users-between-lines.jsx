import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0h6gbipf.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="s0h6gbipf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:users-between-lines"} {...others} />);
}

export default Component;
