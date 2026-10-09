import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_8jrujkz.css';
import '../../css/c/cqfb17bhj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c_8jrujkz"/><path class="cqfb17bhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:briefcase-20-bold"} {...others} />);
}

export default Component;
