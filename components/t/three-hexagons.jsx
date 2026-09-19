import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rinuwhlnp.css';
import '../../css/a/a4d9ngb1e.css';
import '../../css/u/u-p8-vvkm.css';
import '../../css/t/tziv2vbmc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rinuwhlnp"><path class="a4d9ngb1e"/><path class="u-p8-vvkm"/><path class="tziv2vbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:three-hexagons"} {...others} />);
}

export default Component;
