import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bftptrbtp.css';
import '../../css/w/wn6e618bi.css';
import '../../css/i/i0b60i0dz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bftptrbtp"/><path class="wn6e618bi"/><path class="i0b60i0dz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pizza"} {...others} />);
}

export default Component;
