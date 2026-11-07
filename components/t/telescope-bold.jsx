import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0iwjtb9z.css';
import '../../css/w/wvdj1rwub.css';
import '../../css/n/nahr265oy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m0iwjtb9z"/><path class="wvdj1rwub"/><path class="nahr265oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:telescope-bold"} {...others} />);
}

export default Component;
