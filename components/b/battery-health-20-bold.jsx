import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8kieuq1v.css';
import '../../css/d/d-w_kffol.css';
import '../../css/x/x-p659jvv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v8kieuq1v"/><path class="d-w_kffol"/><path class="x-p659jvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-health-20-bold"} {...others} />);
}

export default Component;
