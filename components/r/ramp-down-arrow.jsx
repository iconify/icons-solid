import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmk0w5brw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kmk0w5brw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:ramp-down-arrow"} {...others} />);
}

export default Component;
