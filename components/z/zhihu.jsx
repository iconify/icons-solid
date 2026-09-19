import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6t_-qbjm.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="j6t_-qbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:zhihu"} {...others} />);
}

export default Component;
