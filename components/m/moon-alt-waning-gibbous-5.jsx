import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro7zm-t0s.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="ro7zm-t0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-alt-waning-gibbous-5"} {...others} />);
}

export default Component;
