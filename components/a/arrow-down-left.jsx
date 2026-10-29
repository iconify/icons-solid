import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkp7a4bwa.css';
import '../../css/r/rd7d6grar.css';
import '../../css/f/f1x8zjlhe.css';
import '../../css/a/aamnfraot.css';
import '../../css/r/rkv9j1-pe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hkp7a4bwa wm-deco"/><path class="rd7d6grar wm-k"/><path class="f1x8zjlhe wm-k"/><path class="aamnfraot wm-k"/><path class="rkv9j1-pe wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:arrow-down-left"} {...others} />);
}

export default Component;
