import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4sk38i8b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m4sk38i8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-2-plus-sharp"} {...others} />);
}

export default Component;
