import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_1dsscgf.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="p_1dsscgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:arrow-up-from-water-pump"} {...others} />);
}

export default Component;
