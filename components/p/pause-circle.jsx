import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm4-0nyfo.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="cm4-0nyfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:pause-circle"} {...others} />);
}

export default Component;
