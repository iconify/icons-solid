import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5o_dob7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j5o_dob7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:volume-x"} {...others} />);
}

export default Component;
