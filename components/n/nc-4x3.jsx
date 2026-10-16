import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkhncqomu.css';
import '../../css/k/knw4crqse.css';
import '../../css/w/wi1crn82q.css';
import '../../css/i/irufsabzs.css';
import '../../css/w/wgnn0l6mm.css';
import '../../css/g/g-yvncbci.css';
import '../../css/e/e2qzznu2d.css';
import '../../css/c/clasmybek.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="pkhncqomu"/><path class="knw4crqse"/><path class="wi1crn82q"/><g transform="translate(-23)scale(.8)"><circle class="irufsabzs"/><g class="wgnn0l6mm"><path class="g-yvncbci"/><path class="e2qzznu2d"/><path class="clasmybek"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:nc-4x3"} {...others} />);
}

export default Component;
