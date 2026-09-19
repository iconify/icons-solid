import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4tqsi9nm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k4tqsi9nm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:bell"} {...others} />);
}

export default Component;
