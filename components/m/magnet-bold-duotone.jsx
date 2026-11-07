import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frt5zby4n.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/e6j6dgbiz.css';
import '../../css/m/mgnw8cbbw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frt5zby4n"/><g class="xtpeb-edw"><path class="e6j6dgbiz"/><path class="mgnw8cbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-bold-duotone"} {...others} />);
}

export default Component;
