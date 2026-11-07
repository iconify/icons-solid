import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nspy78boe.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/jejndwbfp.css';
import '../../css/x/xpb82nibn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nspy78boe"/><g class="xtpeb-edw"><path class="jejndwbfp"/><path class="xpb82nibn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:slider-vertical-bold-duotone"} {...others} />);
}

export default Component;
