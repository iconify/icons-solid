import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtgydn0dt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dtgydn0dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:calendar-dates"} {...others} />);
}

export default Component;
