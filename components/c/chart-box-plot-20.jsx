import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km2fl-ght.css';
import '../../css/g/gjj2m4rmf.css';
import '../../css/u/ut1x-4bwy.css';
import '../../css/l/l5mv3femf.css';
import '../../css/a/aw2ifkfec.css';
import '../../css/d/dw57tibvg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="km2fl-ght"/><path class="gjj2m4rmf"/><path class="ut1x-4bwy"/><path class="l5mv3femf"/><path class="aw2ifkfec"/><path class="dw57tibvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-box-plot-20"} {...others} />);
}

export default Component;
