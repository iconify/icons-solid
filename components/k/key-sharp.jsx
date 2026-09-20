import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy9ew3n9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vy9ew3n9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:key-sharp"} {...others} />);
}

export default Component;
