import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uoee4ju2s.css';
import '../../css/y/y1px0qbgg.css';
import '../../css/p/p2i45mb4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uoee4ju2s"/><path class="y1px0qbgg"/><path class="p2i45mb4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cloudy-night-rain"} {...others} />);
}

export default Component;
