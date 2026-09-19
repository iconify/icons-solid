import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vkzgt2baw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vkzgt2baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:funnel-fill"} {...others} />);
}

export default Component;
