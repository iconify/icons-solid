import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-p0xm3rr.css';
import '../../css/e/eb5j48vwt.css';
import '../../css/m/m3rdxrnyn.css';
import '../../css/n/ndjuxyb-c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d-p0xm3rr"/><path class="eb5j48vwt"/><path class="m3rdxrnyn"/><path class="ndjuxyb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-candlestick-20"} {...others} />);
}

export default Component;
