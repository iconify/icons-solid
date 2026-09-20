import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc2pc3bcw.css';

const viewBox = {"width":1800,"height":1800};
const content = `<path class="tc2pc3bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:resend-light"} {...others} />);
}

export default Component;
