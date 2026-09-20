import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/umjxd7bux.css';
import '../../css/w/wmzzd2prd.css';
import '../../css/j/jicqrmboh.css';
import '../../css/z/z_j864liq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="umjxd7bux"/><path class="wmzzd2prd"/><circle class="jicqrmboh"/><path class="z_j864liq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pen-light"} {...others} />);
}

export default Component;
