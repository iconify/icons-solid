import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/gw7h7qb1v.css';
import '../../css/t/ty4_4y0jy.css';
import '../../css/c/cyiud2sjn.css';
import '../../css/u/u2tz_pc4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="gw7h7qb1v"/><path class="ty4_4y0jy"/><path class="cyiud2sjn"/><path class="u2tz_pc4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bring-to-front-one"} {...others} />);
}

export default Component;
