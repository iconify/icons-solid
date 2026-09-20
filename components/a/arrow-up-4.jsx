import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x5gdxj01y.css';
import '../../css/o/o3d5gyfli.css';
import '../../css/b/brxko-bpp.css';
import '../../css/e/e2_-kz8wl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="x5gdxj01y"/><path clip-rule="evenodd" class="o3d5gyfli"/><path class="brxko-bpp"/><path clip-rule="evenodd" class="e2_-kz8wl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:arrow-up-4"} {...others} />);
}

export default Component;
