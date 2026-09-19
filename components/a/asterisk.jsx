import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy4mifo5c.css';

const viewBox = {"width":1472,"height":1536};
const content = `<path class="iy4mifo5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:asterisk"} {...others} />);
}

export default Component;
