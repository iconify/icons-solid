import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxr3okbyi.css';
import '../../css/l/l2tvh_zrw.css';
import '../../css/g/gm3qr28eb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hxr3okbyi"/><path class="l2tvh_zrw"/><path class="gm3qr28eb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-track-bold-duotone"} {...others} />);
}

export default Component;
