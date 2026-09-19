import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0unw79-c.css';

const viewBox = {"width":1000.658,"height":1000};
const content = `<path class="j0unw79-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"brandico:googleplus-rect"} {...others} />);
}

export default Component;
