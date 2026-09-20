import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f4_i3vb-u.css';

const viewBox = {"width":1800,"height":1800};
const content = `<path class="f4_i3vb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:resend-dark"} {...others} />);
}

export default Component;
