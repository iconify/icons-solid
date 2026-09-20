import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh_3glbfs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nh_3glbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:power"} {...others} />);
}

export default Component;
