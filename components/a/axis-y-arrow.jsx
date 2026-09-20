import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erw24lbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="erw24lbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:axis-y-arrow"} {...others} />);
}

export default Component;
