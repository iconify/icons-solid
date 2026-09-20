import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5r6mjb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m5r6mjb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:presentation"} {...others} />);
}

export default Component;
