import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzsqa9bwv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzsqa9bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ship-sharp"} {...others} />);
}

export default Component;
