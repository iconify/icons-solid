import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k89izbcfe.css';
import '../../css/v/v__-tqoro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k89izbcfe"/><path clip-rule="evenodd" class="v__-tqoro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:browser-terminal"} {...others} />);
}

export default Component;
