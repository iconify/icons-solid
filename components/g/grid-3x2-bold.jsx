import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/garh2ib3b.css';
import '../../css/l/l397zn2sl.css';
import '../../css/t/tmf0l99tw.css';
import '../../css/v/v51ggtl0s.css';
import '../../css/r/rwrpbcc9w.css';
import '../../css/f/f3wqpy6nq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="garh2ib3b"/><path class="l397zn2sl"/><path class="tmf0l99tw"/><path class="v51ggtl0s"/><path class="rwrpbcc9w"/><path class="f3wqpy6nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grid-3x2-bold"} {...others} />);
}

export default Component;
