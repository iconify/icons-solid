import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/ld7j91dtg.css';
import '../../css/d/dbhlwxb6w.css';
import '../../css/e/eqrmnkbgv.css';
import '../../css/c/cpvnn28vk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ld7j91dtg"/><path class="dbhlwxb6w"/><path class="eqrmnkbgv"/><path class="cpvnn28vk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:circle-and-square-shape"} {...others} />);
}

export default Component;
