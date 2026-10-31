import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/faoi30bgj.css';
import '../../css/f/f8801gb6p.css';
import '../../css/t/t-xx0ac2o.css';
import '../../css/n/nq1u7dbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="faoi30bgj wm-shadow"/><path class="f8801gb6p"/><path class="t-xx0ac2o"/><path class="nq1u7dbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:git-fork"} {...others} />);
}

export default Component;
