import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/daobr4a-u.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="daobr4a-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:exclamation-circle"} {...others} />);
}

export default Component;
