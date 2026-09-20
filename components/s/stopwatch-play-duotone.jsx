import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrfwjg2rr.css';
import '../../css/g/g9weubcys.css';
import '../../css/l/lpx720bup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jrfwjg2rr"/><path class="g9weubcys"/><path class="lpx720bup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:stopwatch-play-duotone"} {...others} />);
}

export default Component;
