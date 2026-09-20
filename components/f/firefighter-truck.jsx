import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/ycqqzkbcl.css';
import '../../css/n/ny8-p3lhx.css';
import '../../css/f/fy-5hfbxy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="ycqqzkbcl"/><path class="ny8-p3lhx"/><path class="fy-5hfbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:firefighter-truck"} {...others} />);
}

export default Component;
