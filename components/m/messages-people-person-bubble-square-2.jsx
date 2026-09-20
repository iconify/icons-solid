import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcco9vbwq.css';
import '../../css/l/l5p8g7bfl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcco9vbwq"/><path class="l5p8g7bfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:messages-people-person-bubble-square-2"} {...others} />);
}

export default Component;
