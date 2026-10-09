import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxaxxdb7l.css';
import '../../css/x/xyzy_tbmx.css';
import '../../css/q/q56cueczx.css';
import '../../css/d/dg_hh5bhh.css';
import '../../css/k/kroofvbxd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oxaxxdb7l"/><path class="xyzy_tbmx"/><path class="q56cueczx"/><path class="dg_hh5bhh"/><path class="kroofvbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-alert-20"} {...others} />);
}

export default Component;
