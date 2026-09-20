import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3w5f94mi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3w5f94mi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:volume-plus-sharp"} {...others} />);
}

export default Component;
