import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rt45rqbod.css';
import '../../css/a/aovl4bbis.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rt45rqbod"/><path class="aovl4bbis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:icecream-four"} {...others} />);
}

export default Component;
