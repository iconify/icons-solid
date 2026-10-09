import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hac57wbhi.css';
import '../../css/t/trvs23rbx.css';
import '../../css/s/svhavybtd.css';
import '../../css/p/pb6h54xlu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hac57wbhi"/><path class="trvs23rbx"/><path class="svhavybtd"/><path class="pb6h54xlu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermostat-48"} {...others} />);
}

export default Component;
