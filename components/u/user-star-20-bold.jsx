import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd5rvwmxt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jd5rvwmxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-star-20-bold"} {...others} />);
}

export default Component;
