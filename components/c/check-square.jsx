import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd5hjkb4u.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="rd5hjkb4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:check-square"} {...others} />);
}

export default Component;
