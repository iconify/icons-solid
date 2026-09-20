import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z2i7qb6cw.css';
import '../../css/r/r3p7jp59g.css';
import '../../css/z/zm11v-_8h.css';
import '../../css/x/xr3de-9bz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z2i7qb6cw"/><path class="r3p7jp59g"/><path clip-rule="evenodd" class="zm11v-_8h"/><path clip-rule="evenodd" class="xr3de-9bz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:broken-link-2-flat"} {...others} />);
}

export default Component;
