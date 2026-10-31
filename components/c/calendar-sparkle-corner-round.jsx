import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmkgw6vvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gmkgw6vvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-sparkle-corner-round"} {...others} />);
}

export default Component;
