import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd6_-9b4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vd6_-9b4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:calendar-week-solid"} {...others} />);
}

export default Component;
