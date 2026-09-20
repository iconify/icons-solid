import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwxl1lh0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hwxl1lh0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rotate-ccw-sharp-two-tone"} {...others} />);
}

export default Component;
