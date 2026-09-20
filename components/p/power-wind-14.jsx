import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqal447xy.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="tqal447xy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:power-wind-14"} {...others} />);
}

export default Component;
