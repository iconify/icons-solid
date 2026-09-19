import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/m/ms0ewhbdp.css';
import '../../css/e/evh35gd0k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="r8cyu3bwz"/><path class="ms0ewhbdp"/><path class="evh35gd0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:page"} {...others} />);
}

export default Component;
