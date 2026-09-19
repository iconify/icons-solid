import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xcgwb9bps.css';
import '../../css/h/hh4o_6dhg.css';
import '../../css/c/cakmlqblg.css';
import '../../css/r/rlqmyeb_b.css';
import '../../css/r/r3or4298a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="xcgwb9bps"/><path class="hh4o_6dhg"/><path class="cakmlqblg"/><path class="rlqmyeb_b"/><path class="r3or4298a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:bigquery"} {...others} />);
}

export default Component;
