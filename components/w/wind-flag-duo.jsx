import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8jfmzhjz.css';
import '../../css/k/kgwv7k-oi.css';
import '../../css/e/exts4cbck.css';
import '../../css/f/f410vmb0w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="q8jfmzhjz"/><path class="kgwv7k-oi"/><path clip-rule="evenodd" class="exts4cbck"/><path class="f410vmb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:wind-flag-duo"} {...others} />);
}

export default Component;
