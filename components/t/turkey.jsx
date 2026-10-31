import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmxwr-bdz.css';
import '../../css/i/ipz1qcbsc.css';
import '../../css/f/f4m1aurla.css';
import '../../css/o/ov3p5cchl.css';
import '../../css/u/uuu2xx3sq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qmxwr-bdz"/><path class="ipz1qcbsc"/><path class="f4m1aurla"/><path class="ov3p5cchl"/><path class="uuu2xx3sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:turkey"} {...others} />);
}

export default Component;
