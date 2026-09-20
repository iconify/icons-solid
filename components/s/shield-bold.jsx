import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwysefv-t.css';
import '../../css/g/g8qccm5rq.css';
import '../../css/c/ccjtnkscg.css';
import '../../css/a/awgadkllq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hwysefv-t"/><path class="g8qccm5rq"/><path class="ccjtnkscg"/><path class="awgadkllq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shield-bold"} {...others} />);
}

export default Component;
