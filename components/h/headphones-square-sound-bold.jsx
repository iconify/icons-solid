import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v69cw1nsu.css';
import '../../css/y/yzo8rfbaj.css';
import '../../css/y/y2atx_blf.css';
import '../../css/t/tn5jxebef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v69cw1nsu"/><path clip-rule="evenodd" class="yzo8rfbaj"/><path clip-rule="evenodd" class="y2atx_blf"/><path clip-rule="evenodd" class="tn5jxebef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-square-sound-bold"} {...others} />);
}

export default Component;
