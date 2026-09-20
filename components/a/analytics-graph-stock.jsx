import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f007flbyz.css';
import '../../css/t/t8lbebq8p.css';
import '../../css/d/dxdqzdh0d.css';
import '../../css/v/vi5v8ey_t.css';
import '../../css/k/k7ay_mqqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f007flbyz"/><path class="t8lbebq8p"/><path class="dxdqzdh0d"/><path class="vi5v8ey_t"/><path class="k7ay_mqqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:analytics-graph-stock"} {...others} />);
}

export default Component;
