import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h5hjadb4y.css';
import '../../css/h/hwxu7bcra.css';
import '../../css/e/ea7byfbyb.css';
import '../../css/n/nr0u1t7ms.css';
import '../../css/x/xl5aasbzb.css';
import '../../css/l/l-mz7__eh.css';
import '../../css/t/tq4_nw86j.css';
import '../../css/f/fw_669roi.css';
import '../../css/d/dtbq859ux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h5hjadb4y wm-shadow"/><path class="hwxu7bcra wm-shadow"/><path class="ea7byfbyb"/><path class="nr0u1t7ms"/><path class="xl5aasbzb"/><path class="l-mz7__eh"/><path class="tq4_nw86j wm-shine"/><path class="fw_669roi wm-shine"/><path class="dtbq859ux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:star"} {...others} />);
}

export default Component;
