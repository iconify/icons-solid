import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hcm8reluy.css';
import '../../css/r/rou0gmbnx.css';
import '../../css/u/ukj1ozbdo.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="hcm8reluy"/><path class="rou0gmbnx"/><path class="ukj1ozbdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:babel"} {...others} />);
}

export default Component;
