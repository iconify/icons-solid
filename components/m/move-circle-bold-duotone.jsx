import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpv5vhdla.css';
import '../../css/k/kenq7me_r.css';
import '../../css/n/nyk3gvctb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mpv5vhdla"/><path class="kenq7me_r"/><path class="nyk3gvctb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-circle-bold-duotone"} {...others} />);
}

export default Component;
