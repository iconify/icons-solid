import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix5i5ubsh.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ix5i5ubsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:socketdotio-dark"} {...others} />);
}

export default Component;
