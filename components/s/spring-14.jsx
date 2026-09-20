import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9g0b5k5e.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="c9g0b5k5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:spring-14"} {...others} />);
}

export default Component;
