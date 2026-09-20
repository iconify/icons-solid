import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9weubcys.css';
import '../../css/g/g50d4inet.css';
import '../../css/j/jrfwjg2rr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="g9weubcys"/><path class="g50d4inet"/><path clip-rule="evenodd" class="jrfwjg2rr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:stopwatch-duotone"} {...others} />);
}

export default Component;
