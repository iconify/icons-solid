import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr9z3j45u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kr9z3j45u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:bowling-ball"} {...others} />);
}

export default Component;
