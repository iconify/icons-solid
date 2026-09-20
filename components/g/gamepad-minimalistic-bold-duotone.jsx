import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c3ujshblw.css';
import '../../css/n/ndsw3g6vj.css';
import '../../css/n/nlp0xzmnw.css';
import '../../css/g/g-iv8b6la.css';
import '../../css/b/b2ecdbcpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c3ujshblw"/><path class="ndsw3g6vj"/><path class="nlp0xzmnw"/><path class="g-iv8b6la"/><path class="b2ecdbcpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
