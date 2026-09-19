import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czg1q2ikv.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="czg1q2ikv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:globe"} {...others} />);
}

export default Component;
