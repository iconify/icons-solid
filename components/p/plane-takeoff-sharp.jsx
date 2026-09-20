import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bin4q55ni.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bin4q55ni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:plane-takeoff-sharp"} {...others} />);
}

export default Component;
