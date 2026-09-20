import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yoyql2cez.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="yoyql2cez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-content-eye-glasses-vision-sunglasses-protection-spectacles-correction-sun-eye-glasses"} {...others} />);
}

export default Component;
