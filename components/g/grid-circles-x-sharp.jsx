import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyc8fwb2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gyc8fwb2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-circles-x-sharp"} {...others} />);
}

export default Component;
