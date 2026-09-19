import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9j4rgb-u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d9j4rgb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:eye-disabled"} {...others} />);
}

export default Component;
