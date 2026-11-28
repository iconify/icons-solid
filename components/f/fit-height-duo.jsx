import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/omp_mbf3p.css';
import '../../css/k/kds_0_e_w.css';
import '../../css/j/j3ovdnbtk.css';
import '../../css/l/ls09c7rup.css';
import '../../css/c/crypq1qlx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="omp_mbf3p"/><path class="kds_0_e_w"/><path class="j3ovdnbtk"/><path class="ls09c7rup"/><path class="crypq1qlx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fit-height-duo"} {...others} />);
}

export default Component;
