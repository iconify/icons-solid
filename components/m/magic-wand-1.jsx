import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/onbp78bnd.css';
import '../../css/i/ij5dgvbbw.css';
import '../../css/i/ihb9tmbkk.css';
import '../../css/h/h7el531jk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="onbp78bnd"/><path class="ij5dgvbbw"/><path class="ihb9tmbkk"/><path class="h7el531jk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:magic-wand-1"} {...others} />);
}

export default Component;
