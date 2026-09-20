import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnln41ekb.css';
import '../../css/a/a19wi8bwh.css';
import '../../css/v/v6r8pzbir.css';
import '../../css/j/j2_tkw3xk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gnln41ekb"/><path class="a19wi8bwh"/><path class="v6r8pzbir"/><path class="j2_tkw3xk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:scissor-2"} {...others} />);
}

export default Component;
