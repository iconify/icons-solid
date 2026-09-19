import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/c22madzjd.css';
import '../../css/n/n_d7l62sc.css';
import '../../css/s/seb58jbrz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="c22madzjd"/><path class="n_d7l62sc"/><path class="seb58jbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:to-left"} {...others} />);
}

export default Component;
