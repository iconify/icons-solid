import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s-8750bmt.css';
import '../../css/g/ga23znbsx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="s-8750bmt"/><path class="ga23znbsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:area-map"} {...others} />);
}

export default Component;
