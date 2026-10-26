import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq9uqiz4l.css';

const viewBox = {"width":281.94,"height":323.44,"left":39.28,"top":-1.97};
const content = `<path class="rq9uqiz4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:strimzi"} {...others} />);
}

export default Component;
