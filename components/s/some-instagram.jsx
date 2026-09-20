import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mz8vdhbwm.css';
import '../../css/t/t09fqbbpt.css';
import '../../css/j/jjmucv4qj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mz8vdhbwm"/><path class="t09fqbbpt"/><path clip-rule="evenodd" class="jjmucv4qj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:some-instagram"} {...others} />);
}

export default Component;
