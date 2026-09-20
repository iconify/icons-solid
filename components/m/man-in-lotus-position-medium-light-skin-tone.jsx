import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpyqy236k.css';
import '../../css/s/sgctswr3q.css';
import '../../css/m/map-b7bpq.css';
import '../../css/o/os1uj79jw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/z/ztg5wmoma.css';
import '../../css/h/hiot3ubwz.css';
import '../../css/r/rnbfaib6f.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wpyqy236k"><circle class="sgctswr3q"/><path class="map-b7bpq"/><path class="os1uj79jw"/></g><g class="brzn_0bpr"><circle class="ztg5wmoma"/><path class="hiot3ubwz"/><path class="rnbfaib6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-in-lotus-position-medium-light-skin-tone"} {...others} />);
}

export default Component;
