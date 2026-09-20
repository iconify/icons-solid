import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt7qx6thr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jt7qx6thr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:refrigerator"} {...others} />);
}

export default Component;
