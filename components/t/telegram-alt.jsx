import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4y3y7xtl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4y3y7xtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:telegram-alt"} {...others} />);
}

export default Component;
