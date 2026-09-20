import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b4z3-2bzh.css';
import '../../css/d/dh25c2wrp.css';
import '../../css/z/zsz_pac0e.css';
import '../../css/c/cv5mfmbfw.css';
import '../../css/v/vcg_5nb-w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="b4z3-2bzh"/><path class="dh25c2wrp"/><path class="zsz_pac0e"/><path class="cv5mfmbfw"/><path class="vcg_5nb-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:invisible-1"} {...others} />);
}

export default Component;
