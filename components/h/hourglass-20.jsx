import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbcynr_zb.css';
import '../../css/m/mvifll_hv.css';
import '../../css/z/zoq1otb-d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nbcynr_zb"/><path class="mvifll_hv"/><path class="zoq1otb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hourglass-20"} {...others} />);
}

export default Component;
