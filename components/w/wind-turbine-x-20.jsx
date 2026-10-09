import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uccg79b_y.css';
import '../../css/q/qr81ltbbr.css';
import '../../css/q/q76b1ztlq.css';
import '../../css/j/j2_-2hp4c.css';
import '../../css/l/llkbfmrae.css';
import '../../css/d/dbfozsbzp.css';
import '../../css/z/zl2hm-eyj.css';
import '../../css/g/gdpq7jbal.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uccg79b_y"/><path class="qr81ltbbr"/><path class="q76b1ztlq"/><path class="j2_-2hp4c"/><path class="llkbfmrae"/><path class="dbfozsbzp"/><path class="zl2hm-eyj"/><path class="gdpq7jbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-x-20"} {...others} />);
}

export default Component;
