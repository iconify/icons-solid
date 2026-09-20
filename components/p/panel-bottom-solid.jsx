import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk_l8xbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dk_l8xbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:panel-bottom-solid"} {...others} />);
}

export default Component;
