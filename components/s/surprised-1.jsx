import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/e/e72cvwyxg.css';
import '../../css/f/fo4ccr_rl.css';
import '../../css/j/j5cb5ebxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="e72cvwyxg"/><path class="fo4ccr_rl"/><path class="j5cb5ebxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:surprised-1"} {...others} />);
}

export default Component;
