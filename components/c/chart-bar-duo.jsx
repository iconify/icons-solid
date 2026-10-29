import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pvtarpb7m.css';
import '../../css/s/sukohubkj.css';
import '../../css/w/wa7muobyt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pvtarpb7m"/><path class="sukohubkj wm-a"/><path class="wa7muobyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-bar-duo"} {...others} />);
}

export default Component;
