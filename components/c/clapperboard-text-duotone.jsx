import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5kiphefr.css';
import '../../css/q/qy-ljzb9y.css';
import '../../css/i/iveupcb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="s5kiphefr"/><path class="qy-ljzb9y"/><path class="iveupcb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clapperboard-text-duotone"} {...others} />);
}

export default Component;
