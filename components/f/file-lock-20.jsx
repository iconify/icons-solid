import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_dv-4xcr.css';
import '../../css/h/hxy_y1dfx.css';
import '../../css/z/z_aw5vbcy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d_dv-4xcr"/><path class="hxy_y1dfx"/><path class="z_aw5vbcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-lock-20"} {...others} />);
}

export default Component;
