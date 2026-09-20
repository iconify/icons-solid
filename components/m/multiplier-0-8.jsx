import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iby7u_b0v.css';
import '../../css/r/re4qu30mx.css';
import '../../css/e/e01soicac.css';

const viewBox = {"width":40,"height":24};
const content = `<g class="cuyn6tgcc"><path class="iby7u_b0v"/><path clip-rule="evenodd" class="re4qu30mx"/><path class="e01soicac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:multiplier-0-8"} {...others} />);
}

export default Component;
