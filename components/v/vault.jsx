import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gctimrg3l.css';
import '../../css/k/kwbfh4cci.css';
import '../../css/e/e5d6i1b_e.css';
import '../../css/n/nhfptgbij.css';
import '../../css/y/yg497jbnw.css';
import '../../css/y/yhpz6pbdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gctimrg3l wm-shadow"/><path class="kwbfh4cci"/><path class="e5d6i1b_e"/><path class="nhfptgbij"/><path class="yg497jbnw"/><path class="yhpz6pbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:vault"} {...others} />);
}

export default Component;
