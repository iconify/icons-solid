import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2aouwtou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2aouwtou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:mouse-left-click-outline"} {...others} />);
}

export default Component;
