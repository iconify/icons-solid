import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr8g-9bxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gr8g-9bxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:send-hor-light"} {...others} />);
}

export default Component;
