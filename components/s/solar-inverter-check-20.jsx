import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxfeshb7a.css';
import '../../css/u/u8bokm_su.css';
import '../../css/m/mpk28w9ff.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dxfeshb7a"/><path class="u8bokm_su"/><path class="mpk28w9ff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-inverter-check-20"} {...others} />);
}

export default Component;
