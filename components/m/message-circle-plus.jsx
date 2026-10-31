import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v5fz6ctfc.css';
import '../../css/q/qsatebfkx.css';
import '../../css/k/kko1cibeg.css';
import '../../css/a/a_h4nnhcd.css';
import '../../css/r/r-dm-4akk.css';
import '../../css/g/gt4v7sv4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="v5fz6ctfc wm-shadow"/><path class="qsatebfkx"/><path class="kko1cibeg"/><path class="a_h4nnhcd"/><path class="r-dm-4akk"/><path class="gt4v7sv4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:message-circle-plus"} {...others} />);
}

export default Component;
