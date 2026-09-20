import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3c3bj8tj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l3c3bj8tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:traffic-cone-and-question-mark"} {...others} />);
}

export default Component;
