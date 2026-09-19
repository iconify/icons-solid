import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-cf0tyaw.css';
import '../../css/n/nwun370oi.css';
import '../../css/g/gk6535bxo.css';
import '../../css/a/aw0dy7lpn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n-cf0tyaw"/><path class="nwun370oi"/><path class="gk6535bxo"/><path class="aw0dy7lpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:image-upscale"} {...others} />);
}

export default Component;
