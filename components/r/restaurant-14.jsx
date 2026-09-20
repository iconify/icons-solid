import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkdf8eh1k.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="hkdf8eh1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:restaurant-14"} {...others} />);
}

export default Component;
