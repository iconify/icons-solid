import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/z/zn_b-0bsk.css';
import '../../css/e/ee3n-ybbc.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="zn_b-0bsk"/><path class="ee3n-ybbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mc-4x3"} {...others} />);
}

export default Component;
