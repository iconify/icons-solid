import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt7cz-bps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yt7cz-bps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:arc-browser"} {...others} />);
}

export default Component;
