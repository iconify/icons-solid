import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/groa22jty.css';
import '../../css/g/gjqdsrdxq.css';
import '../../css/s/ss-pdbc6w.css';
import '../../css/y/y9oucrran.css';
import '../../css/y/yxzpuepfu.css';
import '../../css/l/l3n6qyb4h.css';
import '../../css/f/fzdyr-bdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="groa22jty wm-shadow"/><path class="gjqdsrdxq wm-shadow"/><path class="ss-pdbc6w"/><path class="y9oucrran"/><path class="yxzpuepfu"/><path class="l3n6qyb4h"/><path class="fzdyr-bdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:lamp-desk"} {...others} />);
}

export default Component;
