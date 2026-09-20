import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f66yio8ll.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f66yio8ll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:free-isp-dark"} {...others} />);
}

export default Component;
