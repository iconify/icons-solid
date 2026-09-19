import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dwd849brd.css';
import '../../css/n/n0_9zqbwb.css';
import '../../css/p/pni55bcix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dwd849brd"/><path class="n0_9zqbwb"/><path class="pni55bcix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sort-four"} {...others} />);
}

export default Component;
