import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4wz5u5le.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="n4wz5u5le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:stopwatch-three-quarter"} {...others} />);
}

export default Component;
