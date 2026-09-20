import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eesgxrbhn.css';
import '../../css/f/ffuto9b7z.css';
import '../../css/o/o3ofllt5g.css';
import '../../css/b/bf-rheomv.css';
import '../../css/t/t3zuokbbz.css';
import '../../css/l/l4c16i1xz.css';
import '../../css/h/h81af9b0e.css';
import '../../css/s/s7blevimp.css';
import '../../css/g/gwdngeb1s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eesgxrbhn"/><path class="ffuto9b7z"/><path class="o3ofllt5g"/><path class="bf-rheomv"/><path class="t3zuokbbz"/><path class="l4c16i1xz"/><path class="h81af9b0e"/><path class="s7blevimp"/><path class="gwdngeb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oracle-apex-dark"} {...others} />);
}

export default Component;
