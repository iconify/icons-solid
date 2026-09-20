import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twznb9xol.css';
import '../../css/q/q0zgshbyg.css';
import '../../css/a/a2yva9fxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="twznb9xol"/><path clip-rule="evenodd" class="q0zgshbyg"/><path class="a2yva9fxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cassette2-filled"} {...others} />);
}

export default Component;
