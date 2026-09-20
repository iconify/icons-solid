import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/g/gdboc2nqx.css';
import '../../css/v/v9o2vhbsf.css';
import '../../css/r/rtla-_a_z.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="gdboc2nqx"/><path class="v9o2vhbsf"/><path class="rtla-_a_z"/><path class="s8qju0q_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-chart-bold-duotone"} {...others} />);
}

export default Component;
