import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y-uv8db3d.css';
import '../../css/o/os5c4pb1g.css';
import '../../css/r/rbvins8lp.css';
import '../../css/o/ooexezbdi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y-uv8db3d"/><rect class="os5c4pb1g"/><path class="rbvins8lp"/><path class="ooexezbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:booth"} {...others} />);
}

export default Component;
