import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wvpm67bpu.css';
import '../../css/c/cpv7ar0hg.css';
import '../../css/u/ucexqlbld.css';
import '../../css/l/lqaowcb_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wvpm67bpu"/><path class="cpv7ar0hg wm-shine"/><path class="ucexqlbld wm-k"/><path class="lqaowcb_j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:circle-check-big"} {...others} />);
}

export default Component;
