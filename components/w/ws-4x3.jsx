import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/d/dbwss0bxe.css';
import '../../css/m/mtrh8qv2q.css';
import '../../css/q/qtudwnmhz.css';

const viewBox = {"width":640,"height":480};
const content = `<g class="nv9qcacyl"><path class="dbwss0bxe"/><path class="mtrh8qv2q"/><path class="qtudwnmhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ws-4x3"} {...others} />);
}

export default Component;
