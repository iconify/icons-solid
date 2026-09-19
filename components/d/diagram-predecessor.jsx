import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-5f8acbs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i-5f8acbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:diagram-predecessor"} {...others} />);
}

export default Component;
