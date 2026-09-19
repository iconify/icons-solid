import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g7zgwspfj.css';
import '../../css/k/km2dlbgif.css';
import '../../css/g/gzmmyqbsr.css';
import '../../css/s/sga_2fbvo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="g7zgwspfj"/><path class="km2dlbgif"/><path class="gzmmyqbsr"/><circle class="sga_2fbvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-skates"} {...others} />);
}

export default Component;
