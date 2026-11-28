import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/thlucdcjr.css';
import '../../css/s/shja-ozij.css';
import '../../css/l/ltnontbea.css';
import '../../css/a/anwiq72wm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="thlucdcjr"/><path class="shja-ozij"/><path class="ltnontbea"/><path class="anwiq72wm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mic"} {...others} />);
}

export default Component;
