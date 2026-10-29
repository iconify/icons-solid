import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k0tm63b0s.css';
import '../../css/v/vvmccbmmh.css';
import '../../css/p/phawmubhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k0tm63b0s"/><path class="vvmccbmmh"/><path class="phawmubhy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paintbrush"} {...others} />);
}

export default Component;
