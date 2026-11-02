import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mznxhcbho.css';
import '../../css/l/ljxms6bnh.css';
import '../../css/f/f6b10qorm.css';
import '../../css/m/m05aqotso.css';
import '../../css/k/k8leyfqeo.css';
import '../../css/a/aoioyibma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="mznxhcbho"/><path class="ljxms6bnh"/><path class="f6b10qorm"/><path class="m05aqotso"/><path class="k8leyfqeo"/><path class="aoioyibma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:life-buoy"} {...others} />);
}

export default Component;
