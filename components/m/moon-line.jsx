import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnf9xcxen.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fnf9xcxen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:moon-line"} {...others} />);
}

export default Component;
