import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7vrkybqp.css';

const viewBox = {"width":26,"height":10,"left":-1,"top":13};
const content = `<path class="i7vrkybqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:aws-icon"} {...others} />);
}

export default Component;
