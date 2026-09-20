import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jeoh0rbfe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jeoh0rbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:grin-tongue-wink-alt"} {...others} />);
}

export default Component;
