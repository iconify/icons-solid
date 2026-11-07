import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/raun3xbhc.css';
import '../../css/d/dk3eigbon.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="raun3xbhc"/><path class="dk3eigbon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevron-first-bold-duotone"} {...others} />);
}

export default Component;
