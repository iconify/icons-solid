import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6-c3x6kp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="d6-c3x6kp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:user-gender-female"} {...others} />);
}

export default Component;
