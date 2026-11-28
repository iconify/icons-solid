import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i5f0lcbnp.css';
import '../../css/p/pt9ctxglj.css';
import '../../css/r/r4bva5bde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="i5f0lcbnp"/><path class="pt9ctxglj"/><path class="r4bva5bde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ice-cream-cone"} {...others} />);
}

export default Component;
