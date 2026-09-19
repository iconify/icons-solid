import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smegf5bhd.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="smegf5bhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:copy"} {...others} />);
}

export default Component;
