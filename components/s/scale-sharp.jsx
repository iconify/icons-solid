import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwrz3wh0v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fwrz3wh0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:scale-sharp"} {...others} />);
}

export default Component;
