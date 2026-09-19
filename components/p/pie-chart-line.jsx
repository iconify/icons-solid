import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdxbmxx-r.css';
import '../../css/e/e-y7gmbcx.css';
import '../../css/f/f5vfgmtxp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 tdxbmxx-r"/><path class="clr-i-outline clr-i-outline-path-2 e-y7gmbcx"/><path class="clr-i-outline clr-i-outline-path-3 f5vfgmtxp"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:pie-chart-line"} {...others} />);
}

export default Component;
