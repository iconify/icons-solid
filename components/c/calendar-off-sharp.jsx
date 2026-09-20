import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uht88ogek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uht88ogek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-off-sharp"} {...others} />);
}

export default Component;
