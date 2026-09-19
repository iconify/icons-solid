import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7e6pqa5g.css';
import '../../css/e/e7iwt8-6g.css';
import '../../css/a/ayz1edcaj.css';
import '../../css/v/v2leg-7xz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y7e6pqa5g"/><path class="e7iwt8-6g"/><path clip-rule="evenodd" class="ayz1edcaj"/><path class="v2leg-7xz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:virtual-reality-glasses"} {...others} />);
}

export default Component;
