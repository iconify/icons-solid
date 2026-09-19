import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw_fxrxtk.css';
import '../../css/i/ivfjhjnom.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vw_fxrxtk"/><path class="ivfjhjnom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:desktop-mouse-2"} {...others} />);
}

export default Component;
