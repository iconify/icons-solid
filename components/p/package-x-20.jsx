import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtjw67ppi.css';
import '../../css/m/m-ue7vdss.css';
import '../../css/m/mc34kf5uc.css';
import '../../css/e/ed4mxccbx.css';
import '../../css/e/eqdr87b3l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rtjw67ppi"/><path class="m-ue7vdss"/><path class="mc34kf5uc"/><path class="ed4mxccbx"/><path class="eqdr87b3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:package-x-20"} {...others} />);
}

export default Component;
