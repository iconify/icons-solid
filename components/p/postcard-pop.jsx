import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/h/h9-168bng.css';
import '../../css/b/bgn27ybcw.css';
import '../../css/a/avo6o_jfh.css';
import '../../css/d/duli9cbzd.css';
import '../../css/i/iyg8d3hmh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path clip-rule="evenodd" class="h9-168bng"/><path class="bgn27ybcw"/><path class="avo6o_jfh"/><path clip-rule="evenodd" class="duli9cbzd"/><path class="iyg8d3hmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:postcard-pop"} {...others} />);
}

export default Component;
