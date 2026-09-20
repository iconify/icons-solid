import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x421mjp6p.css';
import '../../css/v/vtk9v9qiv.css';
import '../../css/i/iy-t96bdf.css';
import '../../css/f/fhryxrb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="x421mjp6p"/><path clip-rule="evenodd" class="vtk9v9qiv"/><path clip-rule="evenodd" class="iy-t96bdf"/><path clip-rule="evenodd" class="fhryxrb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-pull-request-bold-duotone"} {...others} />);
}

export default Component;
