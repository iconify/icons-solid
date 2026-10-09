import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw2cq1b_w.css';
import '../../css/g/g754atbee.css';
import '../../css/r/r1difiu_d.css';
import '../../css/j/j8rue7bvc.css';
import '../../css/h/hnm4jlbps.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iw2cq1b_w"/><path class="g754atbee"/><path class="r1difiu_d"/><path class="j8rue7bvc"/><path class="hnm4jlbps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-pump-air-20"} {...others} />);
}

export default Component;
