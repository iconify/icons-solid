import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/olhf47bti.css';
import '../../css/j/jiq_xsykf.css';
import '../../css/e/e89-ybb7g.css';
import '../../css/r/r12ot5bmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="olhf47bti"/><path class="jiq_xsykf"/></g><path class="e89-ybb7g"/><path class="r12ot5bmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chevrons-up-down-bold-duotone"} {...others} />);
}

export default Component;
