import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdiltt19v.css';
import '../../css/r/rvji97b-y.css';
import '../../css/h/hsuwmebtl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xdiltt19v"/><path class="rvji97b-y"/><path class="hsuwmebtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:analytics-20-bold"} {...others} />);
}

export default Component;
