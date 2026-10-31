import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1lp2ibza.css';
import '../../css/k/kmphovwjy.css';
import '../../css/t/tklxzby7z.css';
import '../../css/k/k7gunuz7g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="b1lp2ibza"/><path class="kmphovwjy"/><path class="tklxzby7z"/><path class="k7gunuz7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:joystick-pop"} {...others} />);
}

export default Component;
