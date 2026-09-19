import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z7boecvbc.css';
import '../../css/r/ry0_30a-t.css';
import '../../css/q/qzndgwhin.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="z7boecvbc"/><path class="ry0_30a-t"/><path class="qzndgwhin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:renal"} {...others} />);
}

export default Component;
