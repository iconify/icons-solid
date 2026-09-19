import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0d4nvb0i.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="j0d4nvb0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:van-shuttle"} {...others} />);
}

export default Component;
