import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/q/q7__kib4o.css';
import '../../css/f/fo4ccr_rl.css';
import '../../css/z/z28mffg4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="q7__kib4o"/><path class="fo4ccr_rl"/><path class="z28mffg4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:stop-circle-stroke"} {...others} />);
}

export default Component;
