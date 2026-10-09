import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxp23q9lf.css';
import '../../css/k/krkae6dal.css';
import '../../css/k/k86basb3d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gxp23q9lf"/><path class="krkae6dal"/><path class="k86basb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-call-48"} {...others} />);
}

export default Component;
