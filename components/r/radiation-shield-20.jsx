import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkihj-w6g.css';
import '../../css/f/fe8opcc3i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rkihj-w6g"/><path class="fe8opcc3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiation-shield-20"} {...others} />);
}

export default Component;
