import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-0mx1beg.css';

const viewBox = {"width":1856,"height":1536};
const content = `<path class="e-0mx1beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:ambulance"} {...others} />);
}

export default Component;
