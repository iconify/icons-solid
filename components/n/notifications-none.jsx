import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u66q5t6jj.css';

const viewBox = {"width":368,"height":432};
const content = `<path class="u66q5t6jj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:notifications-none"} {...others} />);
}

export default Component;
