import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o37q_zbho.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="o37q_zbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-flip-top-flip-top-object-work"} {...others} />);
}

export default Component;
