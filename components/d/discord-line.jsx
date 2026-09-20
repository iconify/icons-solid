import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_x7_ybez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_x7_ybez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:discord-line"} {...others} />);
}

export default Component;
