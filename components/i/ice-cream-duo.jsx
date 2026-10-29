import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/it5sg7btx.css';
import '../../css/v/vfe7eta-y.css';
import '../../css/e/efpyzhttl.css';
import '../../css/t/t6q0p4bxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="it5sg7btx"/><path class="vfe7eta-y wm-a"/><path class="efpyzhttl wm-a"/><path class="t6q0p4bxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ice-cream-duo"} {...others} />);
}

export default Component;
