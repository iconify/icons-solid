import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1lp2mbow.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="w1lp2mbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:hostel-14"} {...others} />);
}

export default Component;
