import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwn8jibaq.css';
import '../../css/t/tksc1h7ms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwn8jibaq"/><path class="tksc1h7ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eraser-bold"} {...others} />);
}

export default Component;
