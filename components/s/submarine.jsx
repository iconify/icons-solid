import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/au-25o3yc.css';
import '../../css/y/ybxz0zb7n.css';
import '../../css/u/uauj9e5aa.css';
import '../../css/r/rpp1k3bom.css';
import '../../css/j/j0xmmk0hs.css';
import '../../css/e/edz_rxbnl.css';
import '../../css/t/thq__7brm.css';
import '../../css/l/lozrq6j1m.css';
import '../../css/v/v9vujspig.css';
import '../../css/c/cul050x8l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="au-25o3yc"/><path class="ybxz0zb7n"/><path class="uauj9e5aa"/><path class="rpp1k3bom"/><path class="j0xmmk0hs"/><path class="edz_rxbnl"/><path class="thq__7brm"/><path class="lozrq6j1m"/><circle class="v9vujspig"/><circle class="cul050x8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:submarine"} {...others} />);
}

export default Component;
