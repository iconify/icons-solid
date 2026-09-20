import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uatr2mb4u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uatr2mb4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:swim-ring-fill"} {...others} />);
}

export default Component;
