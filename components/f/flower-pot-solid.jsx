import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pl93pqsjr.css';
import '../../css/b/bfq2rnoum.css';
import '../../css/w/w9x2fes-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pl93pqsjr"/><path class="bfq2rnoum"/><path class="w9x2fes-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flower-pot-solid"} {...others} />);
}

export default Component;
