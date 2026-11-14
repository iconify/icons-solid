import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwh0ln4yx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwh0ln4yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:attachment-off"} {...others} />);
}

export default Component;
