import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsnbwd4wt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xsnbwd4wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:message-arrow-right"} {...others} />);
}

export default Component;
