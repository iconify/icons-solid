import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iav3n6ptp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iav3n6ptp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:order-ascending"} {...others} />);
}

export default Component;
