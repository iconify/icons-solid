import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpmhpbb4z.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xpmhpbb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:saddle-14"} {...others} />);
}

export default Component;
