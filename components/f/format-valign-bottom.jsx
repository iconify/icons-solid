import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw_r7wb5e.css';

const viewBox = {"width":344,"height":384};
const content = `<path class="vw_r7wb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:format-valign-bottom"} {...others} />);
}

export default Component;
