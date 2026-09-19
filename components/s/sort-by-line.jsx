import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjxc_mbte.css';
import '../../css/k/kymntsbrh.css';
import '../../css/u/ua5y2ubth.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 gjxc_mbte"/><path class="clr-i-outline clr-i-outline-path-2 kymntsbrh"/><path class="clr-i-outline clr-i-outline-path-3 ua5y2ubth"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:sort-by-line"} {...others} />);
}

export default Component;
