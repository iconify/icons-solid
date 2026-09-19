import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5c7b29av.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g5c7b29av"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:calendar-time-filled"} {...others} />);
}

export default Component;
